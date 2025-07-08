import React from 'react';

const Module = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center space-y-16">
      
      {/* Modules Button */}
      <div className="w-80 h-24 bg-gray-300 flex items-center justify-center">
        <button className="bg-slate-600 text-black font-semibold px-6 py-2 rounded w-2/3">
          modules
        </button>
      </div>

      {/* Assignments Button */}
      <div className="w-80 h-24 bg-gray-300 flex items-center justify-center">
        <button className="bg-blue-400 text-black font-semibold px-4 py-2 rounded w-1/2">
          assignments
        </button>
      </div>

    </div>
  );
};

export default Module;
