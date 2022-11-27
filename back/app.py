from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return jsonify({
        'name': 'Osteria Itália',
        'category': 'Italiana',
        'openingHours': 'ter-sáb das 19h às 23h',
        'address': 'R. Gen. Osório, 63 - Vila Ema',
        'phone': '(12) 3308-0633',
    })
