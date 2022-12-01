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

    from app.models import Restaurant

    @app.route("/")
    def hello_world():
        restaurant = Restaurant.query.filter_by(name="Osteria Itália").first()

        return jsonify(restaurant.to_dict_json())

    return app

