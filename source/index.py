from source import app
from flask import request, render_template, jsonify, redirect

from os import listdir
import os
import json

from typing import List, Callable, Any, Iterable, ByteString


@app.route('/', methods=['GET'])
def main():
    return render_programs_template()

@app.route('/search', methods=['GET'])
def search():
    search_by = request.args.get('search_by', type=str)
    values = request.args.getlist('value')
    return render_programs_template(search_by=search_by, values=values)

def render_programs_template(search_by : str = None, values : List[ByteString] = None) -> List[dict]:    
    programs_to_show = []
    found_programs = []

    if not search_by or not values:
        return render_programs_template('all', [''])

    if search_by == 'tags':
        found_programs = [name for tag, name in get_files_by_tags(values).items()]
        if found_programs:
            found_programs = found_programs[0]
    elif search_by == 'name':
        found_programs = get_files_by_name(values[0])
    elif search_by == 'all':
        found_programs = [name for tag, name in get_files_by_tags(values).items()]
        if found_programs:
            found_programs = found_programs[0]
        found_programs += get_files_by_name(values[0])
    else:
        return render_template('new_index.html', programs=[], programs_len=0)

    if found_programs is None:
        print("Here?")
        return render_template('new_index.html', programs=[], programs_len=0)
        
    files_directory = app.config['FILES_DIRECTORY']

    for program in found_programs:
        program_dict = {}
        program_dict['name'] = program
        program_dict['icon'] = os.path.join(os.path.join("static/files", program), app.config['ICON_FILE'])
        if not os.path.isfile(program_dict['icon']):
            program_dict['icon'] = app.config['DEFAULT_ICON_PATH']
        program_dict['versions'] = sorted(listdir(os.path.join(os.path.join(files_directory, program), app.config['VERSIONS_DIRECTORY'])))
        program_dict['tags'] = list()
        with open(os.path.join(os.path.join(files_directory, program), app.config['TAGS_FILE']), 'r') as tags_file:
            tags_data = tags_file.readlines()
            for tag in tags_data:
                tag = tag.replace('\n', '')
                if tag not in program_dict['tags']:
                    program_dict['tags'].append(tag)
        sorted(program_dict['tags'])
        if program_dict not in programs_to_show:
            programs_to_show.append(program_dict)

    return render_template('new_index.html', programs=programs_to_show, programs_len=len(programs_to_show))    

def get_files_by_tags(tags: Iterable[ByteString]) -> dict:
    files_directory = app.config['FILES_DIRECTORY']
    programs = os.listdir(files_directory)
    ret_tags = {}

    if not programs or len(programs) == 0:
        return ret_tags

    for search_tag in tags:
        for program in programs:
            # Get all the tags of the program
            program_tags = get_program_tags(
                os.path.abspath(os.path.join(files_directory, program)))

            # Check all the program tags
            for program_tag in program_tags:
                # Check if the program's tag contains the user searched tag
                if search_tag in program_tag:
                    if search_tag not in ret_tags:
                        ret_tags[search_tag] = list()
                    if program not in ret_tags[search_tag]:
                        ret_tags[search_tag].append(program)

    return ret_tags

def get_files_by_name(program_name: ByteString) -> list:
    files_directory = app.config['FILES_DIRECTORY']
    programs = os.listdir(files_directory)
    ret_list = list()

    if not programs or len(programs) == 0:
        return ret_list

    for program in programs:
        if program_name in program:
            ret_list.append(program)

    return ret_list


def is_program_valid(directory: ByteString) -> bool:
    # Check if the given path is an existing directory
    if not os.path.isdir(directory):
        return False

    directory_files = listdir(directory)

    # Could not find tags file
    if app.config['TAGS_FILE'] not in directory_files:
        return False
    # Could not find versions directory
    elif app.config['VERSIONS_DIRECTORY'] not in directory_files:
        return False
    # The versions is not a directory
    elif not os.path.isdir(
            os.path.abspath(
                os.path.join(directory, app.config['VERSIONS_DIRECTORY']))):
        return False

    return True

def get_program_tags(directory: ByteString) -> list:
    if not is_program_valid(directory):
        return list()

    with open(os.path.join(directory, app.config['TAGS_FILE']),
              'r') as file_obj:
        tags = [
            tag.replace('\n', '')
            for tag in file_obj.readlines()
        ]
        tags = filter(lambda tag: len(tag) > 0, tags)
        return tags