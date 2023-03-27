import { HatItemCardProps } from '../../types';

function AddToCartButton({ handleAddToCart }: HatItemCardProps) {
  return (
    <button
      onClick={handleAddToCart}
      className='block w-2/3 rounded bg-green p-2 text-sm mt-3 text-white font-medium transition hover:scale-105'
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
