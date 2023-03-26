import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartIcon() {
  return (
    <>
      <FontAwesomeIcon className='h-8 w-8' icon={faShoppingCart} />
    </>
  );
}

export default CartIcon;
