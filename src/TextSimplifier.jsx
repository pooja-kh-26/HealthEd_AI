import { useState } from 'react';

export default function TextSimplifier() {
  const [originalText, setOriginalText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSimplify = async () => {
    if (!originalText.trim()) {
      setError('Please enter some text to simplify');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: originalText }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      setSimplifiedText(data.answer);
    } catch (err) {
      setError(`Error: ${err.message}`);
      setSimplifiedText('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleSelect = (example) => {
    setOriginalText(example);
  };

  const examples = [
    "The patient presents with acute myocardial infarction with ST elevation in leads V2-V4. Immediate percutaneous coronary intervention is recommended.",
    "The medication is contraindicated in patients with hepatic impairment or those taking CYP3A4 inhibitors due to risk of increased plasma concentrations.",
    "Bilateral pulmonary infiltrates were observed on chest radiography, suggestive of acute respiratory distress syndrome secondary to pneumonia."
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">HealthEd AI Text Simplifier</h1>
        <p className="text-gray-600 mt-2">Transform complex medical text into easy-to-understand language</p>
      </div>

      <div className="mb-6 bg-gray-100 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Example texts to try:</h3>
        <div className="flex space-x-4 overflow-x-auto">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleSelect(example)}
              className="text-left px-4 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-150 text-sm font-medium text-gray-700"
            >
              {example.length > 100 ? `${example.substring(0, 100)}...` : example}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 mb-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Original Text</h2>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            placeholder="Enter medical or healthcare text here..."
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
          ></textarea>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Simplified Text</h2>
          <div className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 overflow-auto h-72">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-pulse text-blue-600">Simplifying...</div>
              </div>
            ) : (
              simplifiedText || <span className="text-gray-400">Simplified text will appear here...</span>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg text-center">
          {error}
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleSimplify}
          disabled={isLoading}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition duration-200"
        >
          {isLoading ? 'Simplifying...' : 'Simplify Text'}
        </button>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">How it works</h3>
        <p className="text-gray-600 mb-4">Our AI-powered text simplifier uses natural language processing to:</p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Identify complex medical terminology</li>
          <li>Replace technical terms with everyday language</li>
          <li>Restructure complicated sentences for better readability</li>
          <li>Maintain the original meaning while making the content more accessible</li>
        </ul>
      </div>

      <div className="mt-12 text-sm text-gray-500 text-center">
        <p>Powered by Flask API | HealthEd AI v1.5</p>
      </div>
    </div>
  );
}
