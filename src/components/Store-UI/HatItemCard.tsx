import React from 'react';
import { HatItemCardProps } from '../../types';
import AddToCartButton from '../buttons/AddToCartButton';

function HatItemCard({
  name,
  image,
  price,
  handleAddToCart,
}: HatItemCardProps) {
  return (
    <div className='w-11/12'>
      <img
        src={image}
        alt=''
        className='h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72'
      />

      <div className='relative border border-gray-100 bg-white p-6'>
        <h3 className='mt-4 text-lg font-medium text-gray-900'>{name}</h3>
        <p className='mt-1.5 text-sm text-gray-700'>${price}</p>

        <AddToCartButton
          handleAddToCart={handleAddToCart}
          name={name}
          image={image}
          price={price}
        />
      </div>
    </div>
  );
}

export default HatItemCard;
