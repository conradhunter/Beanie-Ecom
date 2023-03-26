import React from 'react';
import { Link } from 'react-router-dom';
import Instagram from './icons/InstagramIcon';

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-slate-700 to-slate-900 py-10 flex flex-col items-center justify-center gap-10'>
      <h1 className='text-2xl text-white'>PeakCaps</h1>
      <ul className='text-center text-sm text-white flex flex-col gap-2'>
        <li>
          <Link className='hover:underline duration-100' to=''>
            Shipping & Returns
          </Link>
        </li>
        <li>
          <Link className='hover:underline duration-100' to=''>
            Contact
          </Link>
        </li>
        <li className='flex justify-center'>
          <Link to=''>
            <Instagram />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
