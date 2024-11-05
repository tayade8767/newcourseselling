/* eslint-disable no-unused-vars */
import React from 'react';
// import SearchBox from './SearchBox';

function NavBar() {
  return (
    <div className="h-16 fixed top-0 w-full bg-white flex items-center justify-between px-4 md:px-8 shadow-md z-20">
      <div className="flex items-center">
        <div className="p-1 bg-white rounded-full">
          <img
            src="https://i.insider.com/63d93b280a08ae0018a62b4f?width=700"
            alt="Profile"
            className="h-[3.5rem] w-[3.5rem] rounded-full"
          />
        </div>
      </div>

     
      <div className="flex items-center space-x-4">
       
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-md">
          <input
            type="text"
            placeholder="Type here to search.."
            className="bg-transparent outline-none text-gray-600 w-64"
          />
          <button className="text-gray-500 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m1.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        
        <div className=" bg-red-500 rounded-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWvRBKQ78rfLVw4-qlKDl0NTS7pNcf0xVJ-xljgMfevoEujQQ9T5RUrVFcfPwcUlJxjo&usqp=CAU"
            alt="Profile"
            className="h-11 w-11 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;