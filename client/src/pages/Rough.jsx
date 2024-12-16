import React from "react";
import { FaSearch } from "react-icons/fa";

function Rough() {
  const clearInput = () => {
    document.getElementById("search-input").value = "";
  };

  const performSearch = () => {
    const query = document.getElementById("search-input").value;
    window.location.href = `https://www.google.com/search?q=${query}`;
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex w-full max-w-md bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <input
          type="text"
          id="search-input"
          placeholder="Google Search..."
          className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          id="clear-button"
          onClick={clearInput}
          className="px-4 text-gray-400 hover:text-red-500 transition duration-200"
        >
          X
        </button>
        <button
          id="search-button"
          onClick={performSearch}
          className="px-4 text-gray-400 hover:text-blue-500 transition duration-200"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default Rough;
