from flask import Flask
from flask_cors import CORS

# STATIC_FOLDER = '../static'
STATIC_FOLDER = '../client/dist'
TEMPLATE_FOLDER = '../client/dist'

app = Flask(__name__, static_url_path='', static_folder=STATIC_FOLDER, template_folder=TEMPLATE_FOLDER)
app.config.from_object('config')
CORS(app)

from server.routes import index
