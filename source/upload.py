from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename

from os import listdir
import os
from source import app

from typing import List, Callable, Any, Iterable, ByteString


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        program_name = request.form['name']
        program_version = request.form['version']
        program_related_tags = request.form['tags']

        if not program_name or not program_version or not program_related_tags:
            return 'Invalid name/version/related tags.'

        program_related_tags = program_related_tags.split(',')

        if 'file' not in request.files:
            return 'No selected file'
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if not file or file.filename == '':
            return 'No selected file'

        program_root_folder = os.path.join(app.config['FILES_DIRECTORY'], secure_filename(program_name))
        program_versions_folder = os.path.join(program_root_folder, app.config['VERSIONS_DIRECTORY'])
        program_current_version_folder = os.path.join(program_versions_folder, program_version)

        if os.path.exists(program_current_version_folder):
            return 'Version already exists'

        if not os.path.exists(program_root_folder):
            os.makedirs(program_root_folder)

        if not os.path.exists(program_versions_folder):
            os.makedirs(program_versions_folder)

        if not os.path.exists(program_current_version_folder):
            os.makedirs(program_current_version_folder)

        with open(os.path.join(program_root_folder, app.config['TAGS_FILE']), 'w') as tags_file:
            for tag_index in range(0, len(program_related_tags), 1):
                tags_file.write(program_related_tags[tag_index])
                if tag_index != len(program_related_tags) - 1:
                    tags_file.write('\n')

        file.save(os.path.join(program_current_version_folder, secure_filename(file.filename)))
        return 'File has uploaded'

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      File: <input type=file name=file><br/>
      Name: <input type=input name=name><br/>
      Version: <input type=input name=version><br/>
      Tags: <input type=input name=tags><br/>
      <input type=submit value=Upload>
    </form>
    '''