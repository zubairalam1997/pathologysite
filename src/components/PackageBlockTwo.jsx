import React, { useState } from 'react';
import {BiChevronDown , BiCheck} from 'react-icons/bi'
import Navbar from './Navbar';
import Cart from './Cart';
import Footer from './Footer';
import packages from '../PackagesList';


const truncateLength = (text , maxLength) =>{
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text ;
};

const BlockPackage = ({ title, parameters, price, homeCollection, labVisit ,addToCart }) => {

    const maxTitleLength = 25;
    
   
    const [cartAdded , setCartAdded] = useState(false);


    return (
        
        <div className='box-border py-6 px-6 cursor-pointer border-gray-300 border-2 w-[25%] mx-6 mb-4'>
        <div className='flex'>
          <h1 className='text-lg font-bold'title={title}>
            {truncateLength(title,maxTitleLength)}
          </h1>
        </div>
        <div>
          <p className='text-gray-600 text-bold text-sm'>
            {parameters} Parameter(s) Covered
          </p>
        </div>
        <div className='pl-0 items-baseline pb-0'>
          <span className='text-xl'> {price}</span>
          <div className='flex gap-4 pl-0 text-[13px] text-green-600'>
            <span className='flex items-center'>
              <span className='rounded-full bg-green-600 text-white flex items-center justify-center w-3 h-3'>
                <BiCheck className='text-white w-3 h-3' />
              </span>
              <span className='ml-2 mb-0'>{homeCollection}</span>
            </span>
            <span className='flex items-center'>
              <span className='rounded-full bg-green-600 text-white flex items-center justify-center w-3 h-3'>
                <BiCheck className='text-white w-3 h-3' />
              </span>
              <span className='ml-2 mb-0'>{labVisit}</span>
            </span>
          </div>
  
          <div className='flex gap-2 pl-0 mt-2'>
            <button 
            className={`whitespace-nowrap px-2 h-[2rem] w-[6rem] text-sm rounded-md capitalize hover:scale-105 duration-150 items-center text-white ${cartAdded ?'bg-green-600' :'bg-blue-700'} `}
            onClick={() => {if(!cartAdded)
              addToCart({ title, parameters, price, homeCollection, labVisit });
                setCartAdded(true);
            }}
            >
              {cartAdded ? 'Added' : 'Add to cart'}
            </button>
            <span className='text-blue-600 pl-2 items-baseline'>Know more</span>
            <span className='mt-1 ml-0 text-blue-600 w-3 h-3 font-bold'><BiChevronDown /></span>
          </div>
        </div>
      </div>
);
};



const PackageBlockTwo = () => {

   
    const [searchQuery , SetSearchQuery] = useState('');
    const [cart , setCart] = useState([]);
    const [cartCount ,setCartCount] = useState(0);

    const addToCart = (item) => {
      setCart((prevCart) => {
        const updatedCart = [...prevCart, item];
        console.log(updatedCart); // Log the updated cart
        setCartCount(updatedCart.length);
        return updatedCart;
      });
    }

    const filteredPackages = packages.filter((packageItem) =>
    packageItem.title.toLowerCase().includes(searchQuery.toLowerCase()) 
    );

  return (
    <>
    <Navbar cartCount={cartCount} cart={cart} />
    <div className=' my-auto py-4 mx-auto text-center mt-3 h-[5.5rem]' >
        <input type="text"
        className=' h-[3rem] w-[100%] max-w-[40rem] px-4 py-2 border border-gray-400 rounded-lg shadow-md focus:outline-none  focus:border-gray-500 '
        value={searchQuery}
        placeholder='Search'
        onChange={(e) => SetSearchQuery(e.target.value)} />
    </div>
    <div className='flex flex-wrap justify-center py-6 my-6'>
      {filteredPackages.map((packageItem, index) => (
        <BlockPackage
          key={index}
          title={packageItem.title}
          parameters={packageItem.parameters}
          price={packageItem.price}
          homeCollection={packageItem.homeCollection}
          labVisit={packageItem.labVisit}
          addToCart={addToCart}
          cart={cart}
        />
      ))}
    </div>
    <Cart />
    <Footer />

    </>
  );
};

export default PackageBlockTwo;
