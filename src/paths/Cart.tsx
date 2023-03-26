import React from 'react';
import CheckOutButton from '../components/buttons/CheckOutButton';
import CartItem from '../components/Store-UI/CartItem';
import { ProductCard } from '../types';
import undrawCart from '../assets/empty_cart.svg';

interface Props {
  cart: ProductCard[];
  setCart: React.Dispatch<React.SetStateAction<ProductCard[]>>;
}

function Cart({ cart, setCart }: Props) {
  function handleRemoveFromCart() {
    console.log('Removed from cart');
  }

  return (
    <section className=''>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className='mx-auto max-w-3xl'>
          <header className='text-center'>
            <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>
              {cart.length === 0 ? 'Your cart is empty' : 'Your cart'}
            </h1>
          </header>
          <div className='mt-8'>
            <ul className='space-y-4'>
              {cart.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    item={item}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                );
              })}
              {cart.length === 0 ? (
                <img className='w-96 my-20 mx-auto' src={undrawCart} />
              ) : null}
            </ul>
            <div className='mt-8 flex justify-end border-t border-gray-100 pt-8'>
              <div className='w-screen max-w-lg space-y-4'>
                <dl className='space-y-0.5 text-sm text-gray-700'>
                  <div className='flex justify-between'>
                    <dt>Subtotal</dt>
                    <dd>$200</dd>
                  </div>

                  <div className='flex justify-between'>
                    <dt>Shipping</dt>
                    <dd>Calculated at Checkout</dd>
                  </div>

                  <div className='flex justify-between !text-base font-medium'>
                    <dt>Total</dt>
                    <dd>$200</dd>
                  </div>
                </dl>

                <div className='flex justify-end'>
                  <CheckOutButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Cart;
