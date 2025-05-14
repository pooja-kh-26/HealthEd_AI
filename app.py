from flask import Flask, request, jsonify
from flask_cors import CORS
from difflib import get_close_matches
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

medicine_df = pd.read_csv('drugs_side_effects_drugs_com.csv')

csv_path = os.path.join('data', 'train[1].csv')
df = pd.read_csv('train[1].csv')


@app.route('/chatbot', methods=['POST'])
def chatbot():
    # Get user's question from request
    data = request.get_json()
    user_question = data.get('question', '').strip().lower()

    if not user_question:
        return jsonify({'error': 'No question provided'}), 400

    # Find the most similar question in the dataset
    questions_list = df['Question'].str.lower().tolist()
    matches = get_close_matches(user_question, questions_list, n=1, cutoff=0.6)

    if matches:
        # Get the best match
        best_match = matches[0]
        # Find the corresponding answer
        answer = df[df['Question'].str.lower() == best_match]['Answer'].values[0]
        return jsonify({
            'question': user_question,
            'answer': answer,
            'matched_question': best_match
        })
    else:
        return jsonify({
            'question': user_question,
            'answer': "I don't have an answer for that question. Please try rephrasing.",
            'matched_question': None
        })


@app.route('/drug/<drug_name>', methods=['GET'])
def get_drug_info(drug_name):
    result = medicine_df[
        medicine_df['drug_name'].str.contains(drug_name, case=False, na=False)
    ]

    if result.empty:
        return jsonify({"error": f"No data found for drug '{drug_name}'"}), 404

    conditions = result['medical_condition'].dropna().unique().tolist()
    effects = result['side_effects'].dropna().unique().tolist()

    return jsonify({
        "drug": drug_name,
        "medical_conditions": conditions,
        "side_effects": effects
    })


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
