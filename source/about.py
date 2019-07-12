from flask import Flask, render_template
from source import app

@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')