import React from 'react';
import { useDispatch } from 'react-redux';
import { chat } from '../redux/Action';

const Enroll = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center h-screen text-white'>
      <div className='text-center max-w-md p-8 rounded-md shadow-lg bg-white'>
        <h1 className='text-4xl font-bold mb-6 text-gray-800'>Welcome to Student Info System</h1>
        <p className='text-lg mb-8 text-gray-700'>Enter now to begin your enrollment process.</p>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => dispatch(chat())}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Enroll;
