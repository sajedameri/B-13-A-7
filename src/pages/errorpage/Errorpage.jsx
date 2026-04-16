import React from 'react';



const Errorpage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      
      {/* Error Code */}
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      {/* Title */}
      <h2 className="text-5xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      {/* Button */}
      <button
        onClick={() => window.location.href = "/Home"}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go Back Home
      </button>

    </div>
  );
};


export default Errorpage;
