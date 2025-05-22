import { useState } from 'react';

export default function DrugSearch() {
  const [drugName, setDrugName] = useState('');
  const [drugInfo, setDrugInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!drugName.trim()) {
      setError('Please enter a medication name');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://healthcare-ml.onrender.com/drug/${drugName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      setDrugInfo(data);
    } catch (err) {
      setError(`Error: ${err.message}`);
      console.error('Error fetching drug information:', err);
      setDrugInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-8 justify-between">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">HealthEd AI Drug Info Finder</h1>
        <p className="text-gray-600 mt-2">Search and understand medication uses and side effects in simple terms</p>

        {/* Search bar moved here */}
        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={drugName}
                onChange={(e) => setDrugName(e.target.value)}
                placeholder="Enter medication name..."
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !drugName.trim()}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="p-4 bg-red-100 text-red-800 rounded mb-6">
          {error}
        </div>
      )}

      {/* Loading spinner */}
      {isLoading && (
        <div className="p-8 bg-white rounded-lg shadow text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Searching for medication information...</p>
        </div>
      )}

      {/* Display drug information */}
      {!isLoading && drugInfo && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{drugInfo.drug}</h2>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Used for treating:</h3>
            {drugInfo.medical_conditions && drugInfo.medical_conditions.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">
                {drugInfo.medical_conditions.map((condition, index) => (
                  <li key={index} className="text-gray-700">{condition}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 italic">No information available</p>
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Common side effects:</h3>
            {drugInfo.side_effects && drugInfo.side_effects.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">
                {drugInfo.side_effects.map((effect, index) => (
                  <li key={index} className="text-gray-700">{effect}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 italic">No information available</p>
            )}
          </div>
        </div>
      )}

      {/* Footer with data source */}
      <div className="p-4 text-sm text-gray-500 text-center mt-12">
        <p>Data sourced from public drug information database | HealthEd AI v1.5</p>
        <p className="mt-2">Always consult a healthcare professional before starting, stopping, or changing medications</p>
      </div>
    </div>
  );
}
