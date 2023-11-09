import React from 'react';
import { useDispatch } from 'react-redux';
import { enroll } from '../redux/Action';

const Final = ({ name, age }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='bg-gray-200 p-6 rounded-lg shadow-md text-center'>
        <h1 className='text-3xl font-bold mb-6'>Congratulations!</h1>
        <p className='text-xl mb-4'>
          Your name {name} aged {age} has been successfully added to the student system.
        </p>
        <button
          onClick={() => dispatch(enroll())}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default Final;
