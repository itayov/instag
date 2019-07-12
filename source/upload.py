from flask import Flask, flash, request, redirect, url_for, render_template
from werkzeug.utils import secure_filename

from os import listdir
import os
from source import app


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
        
        icon_file = None
        if 'icon' in request.files:
            user_icon_file = request.files['icon']
            if not is_valid_icon(user_icon_file.filename):
                return 'Invalid program icon file'
            icon_file = user_icon_file.filename
            

        program_root_folder = os.path.join(app.config['FILES_DIRECTORY'], program_name)
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

        if icon_file is not None:
            file.save(os.path.join(program_root_folder, secure_filename(app.config['ICON_FILE'])))

        file.save(os.path.join(program_current_version_folder, secure_filename(file.filename)))
        return 'File has uploaded'
        
    return render_template('upload.html')

def is_valid_icon(filename : str) -> bool:
    valid_imgs = ['png']
    for image_type in valid_imgs:
        if filename.endswith('.' + image_type):
            return True
    return False