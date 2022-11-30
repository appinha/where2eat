from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from config import config

cors = CORS()
db = SQLAlchemy()


def create_app(config_name):
    # create and configure the app
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    cors.init_app(app)
    db.init_app(app)

    @app.route("/")
    def hello_world():
        return jsonify({
            'name': 'Osteria Itália',
            'category': 'Italiana',
            'openingHours': 'ter-sáb das 19h às 23h',
            'address': 'R. Gen. Osório, 63 - Vila Ema',
            'phone': '(12) 3308-0633',
        })

    return app

