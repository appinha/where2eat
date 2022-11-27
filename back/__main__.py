from flask import jsonify
from flask_cors import CORS

from back import create_app


app = create_app()
CORS(app)


@app.route('/', methods=['GET'])
def index():
    return jsonify({
        'name': 'Osteria Itália',
        'category': 'Italiana',
        'openingHours': 'ter-sáb das 19h às 23h',
        'address': 'R. Gen. Osório, 63 - Vila Ema',
        'phone': '(12) 3308-0633',
    })


if __name__ == '__main__':
    app.run(host='127.0.0.1')
