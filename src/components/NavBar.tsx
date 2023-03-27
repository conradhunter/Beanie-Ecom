import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './icons/CartIcon';
import Instagram from './icons/InstagramIcon';

function NavBar({ cartCount }: any) {
  function displayCartCount() {
    if (cartCount !== 0) {
      return (
        <span className='bg-red h-5 w-5 p-2 text-white rounded-full absolute flex items-center justify-center top-4 -right-2'>
          {cartCount}
        </span>
      );
    }
  }

  return (
    <nav className='bg-slate-700 text-white flex items-center justify-between py-6 px-14'>
      <Link to='/'>
        <span className='text-2xl'>トーク</span>
      </Link>
      <div className='flex gap-6 items-center'>
        <ul className='flex items-center'>
          <li className='px-3 py-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-3 py-2'>
            <Link to='/custom'>Custom</Link>
          </li>
        </ul>
        <Link className='hover:scale-110 duration-200' to='/'>
          <Instagram />
        </Link>
        <Link className='relative' to='/Cart'>
          <CartIcon />
          {displayCartCount()}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
