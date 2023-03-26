import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fabrics, HatStyle } from '../../types';
import CustomOrderButton from '../buttons/CustomOrderButton';

function CustomHatForm() {
  const fabrics: Fabrics[] = [
    {
      name: 'Red',
    },
    {
      name: 'Blue',
    },
    {
      name: 'Green',
    },
    {
      name: 'Yellow',
    },
    {
      name: 'White',
    },
    {
      name: 'Black',
    },
    {
      name: 'Blue Leopard',
    },
    {
      name: 'Red Leopard',
    },
    {
      name: 'Camo',
    },
    {
      name: 'Rainbow',
    },
    {
      name: 'Flowers',
    },
    {
      name: 'Stripes',
    },
    {
      name: 'Polka Dots',
    },
  ];

  const hatStyle: HatStyle[] = [
    {
      name: '4 Point',
    },
    {
      name: 'Neck Tube',
    },
    {
      name: 'Twisted Top',
    },
    {
      name: 'Cuffed',
    },
  ];

  const customPrice = 35;

  const [primaryFabric, setPrimaryFabric] = useState<string>('');
  const [secondaryFabric, setSecondaryFabric] = useState<string>('');
  const [style, setStyle] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(
      `Primary Fabric: ${primaryFabric}, Secondary Fabric: ${secondaryFabric}, Style: ${style}`
    );
  }

  // TODO: Add price calculation && loading spinner if user has not completed all input fields

  return (
    <div className='bg-gray-200 h-fit w-2/3 mx-auto p-14 mt-10 rounded-md shadow-lg'>
      <form onSubmit={handleSubmit} className=''>
        <h1 className='text-2xl font-bold text-center mb-5'>
          Custom Order Form
        </h1>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-4 justify-center'>
            <p className='text-sm mb-5'>
              All fabric preview pictures can be found{' '}
              <Link className='underline' to='/'>
                Here.
              </Link>
            </p>
            <div className='flex justify-between items-center'>
              <label htmlFor=''>Primary Fabric:</label>
              <select
                name='Primary Fabric'
                value={primaryFabric}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setPrimaryFabric(e.target.value)
                }
                className='w-36 py-1 px-2 text-sm'
              >
                <option value={'Select'} disabled>
                  Select a fabric
                </option>
                {fabrics.map((fabric) => {
                  return (
                    <option value={fabric.name} key={fabric.name}>
                      {fabric.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='flex justify-between items-center'>
              <label htmlFor=''>Secondary Fabric:</label>
              <select
                name='Secondary Fabric'
                value={secondaryFabric}
                id=''
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSecondaryFabric(e.target.value)
                }
                className='w-36 py-1 px-2 text-sm'
              >
                <option value={'Select'} disabled>
                  Select a fabric
                </option>
                {fabrics.map((fabric) => {
                  return (
                    <option value={fabric.name} key={fabric.name}>
                      {fabric.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='flex justify-between items-center'>
              <label htmlFor=''>Hat Style:</label>
              <select
                name='Hat Style'
                value={style}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setStyle(e.target.value)
                }
                className='w-36 py-1 px-2 text-sm'
              >
                <option value={'Select'} disabled>
                  Select a style
                </option>
                ;
                {hatStyle.map((style) => {
                  return (
                    <option key={style.name} value={style.name}>
                      {style.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <p className='mt-4 text-xl font-bold'>Total: ${customPrice}</p>
          </div>
          <div>
            <img
              src='https://i.etsystatic.com/27234842/r/il/70ea7f/4585111180/il_1588xN.4585111180_g98y.jpg'
              alt=''
              className='rounded-md shadow-md h-72'
            />
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <CustomOrderButton />
        </div>
      </form>
    </div>
  );
}

export default CustomHatForm;
