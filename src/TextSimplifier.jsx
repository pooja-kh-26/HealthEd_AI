import { useState } from 'react';

export default function TextSimplifier() {
  const [originalText, setOriginalText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSimplify = async () => {
    if (!originalText.trim()) {
      setError('Please enter a health-related question');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://healthcare-ml.onrender.com/chatbot', {
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

  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">HealthEd AI QnA</h1>
        <p className="text-gray-600 mt-2">Ask health-related questions and get easy-to-understand answers</p>
      </div>


      <div className="grid gap-6 mb-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Your Question</h2>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            placeholder="Enter medical or healthcare text here..."
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
          ></textarea>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Answer</h2>
          <div className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 overflow-auto h-[30rem]">
          {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-pulse text-blue-600">Searching for an answer...</div>
              </div>
            ) : (
              simplifiedText || <span className="text-gray-400">The answer will appear here...</span>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg text-center">
          {error}
        </div>
      )}

      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
        <button
          onClick={handleSimplify}
          disabled={isLoading}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition duration-200 shadow-lg"
        >
           {isLoading ? 'Searching...' : 'Ask Question'}
        </button>
      </div>

      <div className="mt-12 text-sm text-gray-500 text-center">
        <p>Powered by Flask API | HealthEd AI v1.5</p>
      </div>
    </div>
  );
}
