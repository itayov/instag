import os

class ApplicationConfiguration(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'Some-Super-Secret-Key'

    # Files settings
    FILES_DIRECTORY = os.path.abspath('./files/')
    TAGS_FILE = '.tags'
    VERSIONS_DIRECTORY = 'versions'