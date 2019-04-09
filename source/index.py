from source import app
from flask import request, render_template, jsonify

from os import listdir
import os
import json

from typing import List, Callable, Any, Iterable, ByteString


@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
    files_directory = app.config['FILES_DIRECTORY']
    #programs = [file.replace(' ', '_') for file in os.listdir(files_directory)][0]
    programs = os.listdir(files_directory)

    if not programs or len(programs) == 0:
        raise FileNotFoundError('Could not find directory {dir}'.format(
            dir=app.config['FILES_DIRECTORY']))

    tags = []

    for program in programs:
        with open(os.path.join(os.path.join(files_directory, program), app.config['TAGS_FILE']), 'r') as tags_file:
            tags_data = tags_file.readlines()
            for tag in tags_data:
                tag = tag.replace('\n', '')
                if tag not in tags:
                    tags.append(tag)

    return render_template('index.html', names=programs, tags=tags)

@app.route('/search', methods=['GET'])
def search():
    search_by = request.args.get('search_by', type=str)

    if search_by == 'tags':
        tags = request.args.getlist('value')
        programs = [name for tag, name in get_files_by_tags(tags).items()]
        if not programs:
            return 'We are sorry, no programs were found :('
        programs = programs[0]
        return '<br>'.join(programs)

    elif search_by == 'name':
        name = request.args.get('value', type=str)
        programs = get_files_by_name(name)
        if not programs:
            return 'We are sorry, no programs were found :('
        return '<br>'.join(programs)

    elif search_by == 'all':
        values = request.args.getlist('value')
        programs = [name for tag, name in get_files_by_tags(values).items()]
        if programs:
            programs = programs[0]

        for value in values:
            programs += get_files_by_name(value)
        
        if not programs:
            return 'We are sorry, no programs were found :('
        programs = list(dict.fromkeys(programs))
        return '<br>'.join(programs)

    else:
        return 'Invalid search_by argument, optional values: [tags/name]'


def get_files_by_tags(tags: Iterable[ByteString]) -> dict:
    files_directory = app.config['FILES_DIRECTORY']
    programs = os.listdir(files_directory)

    if not programs or len(programs) == 0:
        raise FileNotFoundError('Could not find directory {dir}'.format(
            dir=app.config['FILES_DIRECTORY']))

    ret_tags = {}

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

    if not programs or len(programs) == 0:
        raise FileNotFoundError('Could not find directory {dir}'.format(
            dir=app.config['FILES_DIRECTORY']))

    ret_list = list()

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