from flask import Flask
from source.__config__ import ApplicationConfiguration

app = Flask(__name__, template_folder='./../templates/')
app.config.from_object(ApplicationConfiguration)

from source import index
from source import upload
