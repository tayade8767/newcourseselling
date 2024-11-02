import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 bg-gray-100 w-72">
      <input
        type="text"
        placeholder="Type here to search.."
        className="flex-grow bg-transparent outline-none text-sm"
      />
      <button className="text-gray-600">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
