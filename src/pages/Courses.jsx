import React from 'react'
import NavBar from '../components/NavBar';
import CardComponents from '../components/CardComponents';
import SliderBar from '../components/SliderBar';

function Courses() {
    return (
        <div className="min-h-screen bg-gray-50">
         
          <NavBar className="fixed top-0 w-full z-50" />
    
          
          <div className="flex pt-16">
           
            <div className="fixed left-0 w-64 h-[calc(100vh-64px)]">
              <SliderBar />
            </div>
    
            
            <div className="flex-1 ml-64 p-6 ">
              <div className='justify-items-center '>
              <p className=' text-2xl font-semibold	p-4'>Courses</p>
              </div>
            
              <CardComponents />
            </div>
          </div>
        </div>
      );
}

export default Courses;


