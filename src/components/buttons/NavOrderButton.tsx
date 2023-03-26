import React from 'react';

function NavOrderButton() {
  return (
    <button
      style={{ width: 'fit-content' }}
      className='p-3 text-sm bg-gray-100 text-black hover:bg-gray-200 duration-150 rounded-md shadow-md shadow-slate-800'
    >
      Order Now
    </button>
  );
}

export default NavOrderButton;
