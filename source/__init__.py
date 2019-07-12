from flask import Flask
from flask_bootstrap import Bootstrap
from source.__config__ import ApplicationConfiguration

app = Flask(__name__, template_folder='./../templates/', static_folder='./../static')
app.config.from_object(ApplicationConfiguration)

bootstrap = Bootstrap(app)

from source import index, upload, download, about