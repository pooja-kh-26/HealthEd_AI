import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight">
            <span className="block">Healthcare Made Simple</span>
            <span className="block text-blue-600">Powered by AI</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
          Ask any medical-related question, including medicine side effects and usage, and receive easy-to-understand answers instantly.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <button
              onClick={() => navigate('/chatbot')} 
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              QnA
            </button>
            <button
              onClick={() => navigate('/drug-search')} 
              className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Medication Info
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How HealthEd AI Helps You</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered tools make healthcare information more accessible and easier to understand.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Medical Related QnA</h3>
              <p className="text-gray-600">
              Ask any medicine-related questions and get clear, simple answers. Our AI can provide information on medication uses, side effects, dosages, and more, all in easy-to-understand terms.
              </p>
              <div className="mt-4">
                <button
                  onClick={() => navigate('/chatbot')}
                  className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                >
                  Try it now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Medication Information</h3>
              <p className="text-gray-600">
                Search for medications to learn about their uses, side effects, and important information. Understanding your medication can help you make more informed healthcare decisions.
              </p>
              <div className="mt-4">
                <button
                  onClick={() => navigate('/drug-search')}
                  className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                >
                  Try it now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our technology makes healthcare information more accessible in just a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg absolute -top-5 left-6">
                1
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Input Your Text</h3>
                <p className="text-gray-600">
                  Ask medical information or search for a medication name.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg absolute -top-5 left-6">
                2
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">AI Processing</h3>
                <p className="text-gray-600">
                  Our advanced AI analyzes the text, identifying complex terms and medical jargon.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg absolute -top-5 left-6">
                3
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Get Simple Results</h3>
                <p className="text-gray-600">
                  Receive easy-to-understand explanations and information in plain language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            HealthEd AI provides general health information and is not a substitute for professional medical advice. Always consult with a healthcare provider for medical advice.
          </p>
          <p className="mt-4 text-gray-400 text-sm">
            © 2025 HealthEd AI — Making healthcare information accessible to everyone
          </p>
        </div>
      </footer>
    </div>
  );
}