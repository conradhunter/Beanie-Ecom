import React, { useEffect, useState } from 'react';
import HatItemCard from '../components/Store-UI/HatItemCard';
import { ProductCard } from '../types';

interface Props {
  cart: ProductCard[];
  setCart: React.Dispatch<React.SetStateAction<ProductCard[]>>;
}

function Home({ cart, setCart }: Props) {
  const storeProducts: ProductCard[] = [
    {
      id: 1,
      name: 'Blue & Red 4 point',
      image:
        'https://i.etsystatic.com/27234842/r/il/70ea7f/4585111180/il_1588xN.4585111180_g98y.jpg',
      price: 30,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Red & Blue Leopard',
      image:
        'https://i.etsystatic.com/27234842/r/il/70ea7f/4585111180/il_1588xN.4585111180_g98y.jpg',
      price: 30,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Green & Black Tie-Dye',
      image:
        'https://i.etsystatic.com/27234842/r/il/70ea7f/4585111180/il_1588xN.4585111180_g98y.jpg',
      price: 30,
      quantity: 1,
    },
    {
      id: 4,
      name: 'Rainbow Tie-Dye',
      image:
        'https://i.etsystatic.com/27234842/r/il/70ea7f/4585111180/il_1588xN.4585111180_g98y.jpg',
      price: 30,
      quantity: 1,
    },
    {
      id: 5,
      name: 'Flower Power',
      image:
        'https://i.etsystatic.com/27234842/r/il/70ea7f/4585111180/il_1588xN.4585111180_g98y.jpg',
      price: 30,
      quantity: 1,
    },
    {
      id: 6,
      name: 'Red & Black 4 point',
      image:
        'https://i.etsystatic.com/27234842/r/il/70ea7f/4585111180/il_1588xN.4585111180_g98y.jpg',
      price: 30,
      quantity: 1,
    },
  ];
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <main className='row py-20 w-full'>
      <section
        id='hats-display'
        className='grid w-full grid-cols-3 gap-16 place-items-center'
      >
        {storeProducts.map((product) => {
          const handleAddToCart = (event: React.MouseEvent) => {
            console.log(`Product ID: ${product.id} added to cart`);
            setCart([...cart, product]);
            event.currentTarget.textContent = 'Added to Cart';
            // TODO Create logic for text to change to "Added to Cart" for a few seconds then change back to "Add to Cart"
          };

          return (
            <HatItemCard
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              onAddToCart={handleAddToCart}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Home;
