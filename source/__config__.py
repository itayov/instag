import os

class ApplicationConfiguration(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'Some-Super-Secret-Key'

    # Files settings
    FILES_DIRECTORY = os.path.join('static', 'files')
    DEFAULT_ICON_PATH = os.path.join('static', 'default_icon.png')
    TAGS_FILE = '.tags'
    ICON_FILE = 'icon.png'
    VERSIONS_DIRECTORY = 'versions'