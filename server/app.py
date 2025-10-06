from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

mock_portfolio = [
    {"stock": "AAPL", "shares": 5, "price": 150},
    {"stock": "GOOG", "shares": 2, "price": 2800}
]

@app.route('/portfolio', methods=['GET'])
def get_portfolio():
    return jsonify(mock_portfolio)

@app.route('/transactions', methods=['POST'])
def add_transaction():
    data = request.get_json()
    return jsonify({"status": "success", "transaction": data})

if __name__ == "__main__":
    app.run(debug=True)
