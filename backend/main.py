# backend/main.py

import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv('API_KEY')
API_ENDPOINT = f"https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=10&apikey={API_KEY}"

def fetch_data():
    response = requests.get(API_ENDPOINT)
    return response.json()

@app.route('/api/income-statement', methods=['GET'])
def get_income_statement():
    data = fetch_data()
    return jsonify(data)

@app.route('/')
def home():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(port=5000, debug=True)
