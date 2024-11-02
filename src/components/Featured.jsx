import React from 'react';
import CardComponents from './CardComponents';

function Featured() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white gap-4 mb-3'>
      <div className='p-2 '>
        <p className='font-bold text-3xl text-gray-700 justify-self-center'>Featured</p>
      </div>
      <CardComponents/>
    </div>
  );
}

export default Featured;