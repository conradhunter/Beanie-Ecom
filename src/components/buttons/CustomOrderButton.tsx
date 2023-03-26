import React from 'react';

function CustomOrderButton() {
  return (
    <button
      type='submit'
      className='bg-green hover:scale-105 duration-150 text-white w-fit h-fit py-2 px-4 rounded-sm'
    >
      Order
    </button>
  );
}

export default CustomOrderButton;
