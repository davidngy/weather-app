import React from 'react';
import '../App.css';

function EnterLocation() 
{
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='border-solid bg-white rounded-2xl flex justify-evenly items-center h-16 px-4'>
        <box-icon type='solid' name='map'></box-icon>
        <input type="text" placeholder='Enter your location' className='flex-grow mx-2 border-none outline-none h-full py-2 px-4'/>
        <box-icon name='search'></box-icon>
      </div>
    </div>
  );
  
  
}

export default EnterLocation;
