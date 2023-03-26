import React from 'react';
import CustomHatForm from '../components/Store-UI/CustomHatForm';
import { ProductCard } from '../types';

interface Props {
  cart: ProductCard[];
  setCart: React.Dispatch<React.SetStateAction<ProductCard[]>>;
}

function Custom({ cart, setCart }: Props) {
  return (
    <main className='row py-20'>
      {/* Custom build beanies/touques with choice of hape/model/type etc. on this
    page */}
      <section>
        <h1 className='text-2xl text-center'>
          Choose from our range of fabrics to create your own custom toque
        </h1>
        <CustomHatForm />
      </section>
    </main>
  );
}

export default Custom;
