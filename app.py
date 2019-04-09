from source import app
from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('static/build/es6-unbundled', path)

@app.route('/')
def get_index():
    return app.send_static_file('index.html')
