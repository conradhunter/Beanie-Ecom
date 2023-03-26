import React from 'react';

function AddToCartButton({ onAddToCart }: any) {
  return (
    <button
      onClick={onAddToCart}
      className='block w-2/3 rounded bg-green p-2 text-sm mt-3 text-white font-medium transition hover:scale-105'
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
