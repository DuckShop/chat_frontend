import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <a 
            href="/" 
            className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Go Home
          </a>
          <a 
            href="/products" 
            className="inline-block bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Browse Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 