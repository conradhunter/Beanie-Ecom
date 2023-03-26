import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function HamburgerIcon() {
  return (
    <>
      <FontAwesomeIcon className='h-8 w-8' icon={faBars} />
    </>
  );
}

export default HamburgerIcon;
