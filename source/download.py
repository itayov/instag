from flask import Flask, flash, request, redirect, url_for, send_file, Response
import os
from os import listdir
from source import app
from typing import List, Callable, Any, Iterable, ByteString


@app.route('/download', methods=['GET'])
def download_file():
    program_name = request.args.get('name', type=str)
    program_version = request.args.get('version', type=str)

    if not program_name or not program_version:
        return 'Invalid name/version.'

    program_root_folder = os.path.join(app.config['FILES_DIRECTORY'], program_name)
    program_versions_folder = os.path.join(program_root_folder, app.config['VERSIONS_DIRECTORY'])
    program_current_version_folder = os.path.join(program_versions_folder, program_version)

    if not os.path.exists(program_current_version_folder):
        return 'Invalid name/version.'

    file = listdir(program_current_version_folder)[0]
    abs_path = os.path.abspath(os.path.join(program_current_version_folder, file))
    ret_val = send_file(abs_path, attachment_filename=file, as_attachment=True)
    return ret_val