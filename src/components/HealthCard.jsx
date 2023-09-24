import React from 'react';
import { useCartContext } from '../App'; 

const PackageBlock = ({ name, price, x, y, description, discount }) => {
   
  return (
    <div className= 'md:w-[100%] pt-4 px-2 inline-block  gap-6 p-2 cursor-pointer rounded-[1rem]   border-2 '>
        
        <div className='flex'>
        <h1 className='text-xl text-red-600 font-bold  overflow-hidden line-clamp-2 h-[3.5rem]  overflow-ellipsis'>{name}</h1>
        <div className='flex flex-col'>
            <p className='text-gray-600 text-bold text-sm px-3'> Reports  in <span className='bg-blue-300 rounded-sm p-[0.6px]'> {x} </span> hrs</p>
            <p className='text-gray-600 text-bold text-sm px-3'>parameters {y} </p>
        </div>
        </div>
        <div>
            <p className='text-black text-md'>{description}</p>
        </div>

        <div className='flex items-baseline pt-2 pb-0'>
            <span className='text-xl'>${price}</span>
            <span className='text-sm whitespace-nowrap pl-2'>{discount}% for a limited period </span>
            <span>
                <button className=' bg-red-500 px-2  ml-3 h-[2rem] w-[5rem] font-2xl rounded-md capitalize hover:scale-105 duration-150 items-center text-white'>Book</button>
            </span>
        </div>
        
      </div>
    );
  };

const HealthCard = () => {

  const { addToCart } = useCartContext();

  const healthPackages = [
    { name: 'Advance Plus Full Body Checkup', price: '2550', x: '24', y: '94', discount: 76, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    { name: 'Fit India Full Body checkup', price: '2675', x: '15', y: '98', discount: 20, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    { name: 'Smart Full Body Check up with a extraordinary precise results', price: '2700', x: '39', y: '92', discount: 74, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    { name: 'Smart Full Body Checkup', price: '3001', x: '20', y: '97', discount: 72, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    { name: 'Smart Full Body Checkup', price: '3000', x: '20', y: '97', discount: 72, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    { name: 'Smart Full Body Checkup', price: '3000', x: '20', y: '97', discount: 72, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    { name: 'Smart Full Body Checkup', price: '3000', x: '20', y: '97', discount: 72, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    { name: 'Smart Full Body Checkup', price: '3000', x: '20', y: '97', discount: 72, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    // Add more packages here
  ];

  return (
    <div className='relative'>
      <div className='flex h-full min-w-full overflow-x-scroll px-2 mt-6 gap-[2rem]' >
        {healthPackages.map((item, index) => (
          <PackageBlock key={index}
            name={item.name}
            x={item.x}
            y={item.y}
            description={item.description}
            price={item.price}
            discount={item.discount} />
        ))}
      </div>
    </div>
  );
};

export default HealthCard;
