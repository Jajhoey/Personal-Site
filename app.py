import os
from flask import Flask, render_template, url_for
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)
#The following prevents data stored in the browser's
#cache from overwriting css styling
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0



@app.route('/')
def index():
    return render_template("index.html")

@app.route('/about')
def profile():
    return render_template("about.html")

@app.route('/games')
def games():
    return render_template("games.html")

if __name__ == "__main__":
    app.run(debug=True)
