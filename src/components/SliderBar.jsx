import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaGraduationCap, FaShoppingCart, FaCog, FaSignOutAlt } from 'react-icons/fa';

function SliderBar() {
    const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/courses');
  };
  const handleNavigate1 = () => {
    navigate('/home');
  };
  return (
    <div className='flex flex-col w-64 h-full bg-indigo-200 p-5 pt-8'>
      
      <ul>
        <li className='text-lg font-semibold text-blue-800 mb-6'>
          <p className='text-xl'>MAIN MENU</p>
        </li>

        
        <li  onClick={handleNavigate1}  className='flex items-center mb-4 cursor-pointer text-gray-700 hover:text-blue-600'>
          <FaHome className='mr-3 text-lg' />
          <span className='text-lg'>Home  </span>
        </li>

      


        <li onClick={handleNavigate} className='flex items-center mb-4 cursor-pointer text-gray-700 hover:text-blue-600'>
          <FaGraduationCap className='mr-3 text-lg' />
          <span className='text-lg'>Courses</span>
        </li>

        <hr className="border-t border-black my-4  flex " />
       

        <li className='flex items-center mb-4 cursor-pointer text-gray-700 hover:text-blue-600 gap-2'>
          <FaShoppingCart className='mr-3 text-lg' />
          <span className='text-lg'>Purchases</span>
        </li>

        <li className='flex items-center mb-4 cursor-pointer text-gray-700 hover:text-blue-600'>
          <FaCog className='mr-3 text-lg' />
          <span className='text-lg'>Settings</span>
        </li>

        <li className='flex items-center mb-4 cursor-pointer text-gray-700 hover:text-blue-600'>
          <FaSignOutAlt className='mr-3 text-lg' />
          <span className='text-lg'>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default SliderBar;
