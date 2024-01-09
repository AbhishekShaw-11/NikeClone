
import React from 'react';
import { FaSearch } from 'react-icons/fa'; 

const SearchComponent = () => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-3/4"
      />
      <FaSearch className="text-gray-500" />
    </div>
  );
};

export default SearchComponent;
