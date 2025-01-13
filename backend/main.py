import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv('API_KEY')
API_URL = f"https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey={API_KEY}"

@app.route('/financial-data', methods=['GET'])
def get_financial_data():
    response = requests.get(API_URL)
    data = response.json()

    transformed_data = [
        {
            "date": item["date"],
            "revenue": item["revenue"],
            "netIncome": item["netIncome"],
            "grossProfit": item["grossProfit"],
            "eps": item["eps"],
            "operatingIncome": item["operatingIncome"],
        }
        for item in data
    ]

    start_date = request.args.get('startDate', type=int)
    end_date = request.args.get('endDate', type=int)
    min_revenue = request.args.get('minRevenue', type=float)
    max_revenue = request.args.get('maxRevenue', type=float)

    filtered_data = [
        item for item in transformed_data
        if (not start_date or int(item["date"].split("-")[0]) >= start_date) and
           (not end_date or int(item["date"].split("-")[0]) <= end_date) and
           (not min_revenue or item["revenue"] >= min_revenue) and
           (not max_revenue or item["revenue"] <= max_revenue)
    ]

    return jsonify(filtered_data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
