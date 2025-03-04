import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Welcome to NutriPlane</h1>
        
        <p className="text-gray-600 mb-8">
          Embark on your nutrition journey with personalized meal plans and expert guidance.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/login" 
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-200 block"
          >
            Log In
          </Link>
          
          <Link 
            to="/signup" 
            className="w-full border-2 border-green-600 text-green-600 py-3 rounded-md hover:bg-green-100 transition-colors duration-200 block"
          >
            Sign Up
          </Link>
        </div>
        
        <div className="mt-6 text-sm text-gray-500">
          <p>Already have an account? <Link to="/login" className="text-green-600 hover:underline">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;