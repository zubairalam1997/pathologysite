import React, { useState } from 'react'
import {MdChevronLeft , MdChevronRight} from 'react-icons/md' 


const PackageBlock = ({ name, price, x, y, description, discount }) => {
   
    return (
      <div className= 'md:w-[340px] py-8 px-2 inline-block  gap-6 p-2 cursor-pointer rounded-[1rem]   border-2 '>
          
          <div className='flex'>
          <h1 className='text-xl text-red-600 font-bold'>{name}</h1>
          <div className='flex flex-col'>
              <p className='text-gray-600 text-bold text-sm'> Reports  in <span className='bg-blue-300 rounded-sm p-[0.6px]'> {x} </span> hrs</p>
              <p className='text-gray-600 text-bold text-sm'>parameters {y} </p>
          </div>
          </div>
          <div >
              <p className='  text-black text-md'>{description}</p>
          </div>
  
          <div className='flex items-baseline  pb-0'>
              <span className='text-xl'>${price}</span>
              <span className='text-sm pl-2'>{discount}% for a limited period </span>
              <span>
                  <button className=' bg-red-500 px-2  ml-3 h-[2rem] w-[5rem] font-2xl rounded-md capitalize hover:scale-105 duration-150 items-center text-white'>Book</button>
              </span>
          </div>
          
        </div>
      );
    };


 

const PackageSlide = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((currentSlide + 7) % 8);
      };

  
const nextSlide = () => {
    //setCurrentSlide((currentSlide + 1) % 8);
    var slides = document.getElementById('slides')
    slides.scrollLeft = slides.scrollLeft-500
  };
  const healthPackages = [
    { name: 'Advance Plus Full Body Checkup', price: '2550' , x: '24', y: '94' ,discount:76  , description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    { name: 'Fit India Full Body checkup', price: '2675' , x: '15', y: '98' ,discount:20 , description:'It assesses your risks for potential health diseases and helps in health monitoring.'},
    { name: 'Smart Full Body Check up with', price: '2700', x: '39', y: '92' ,discount:74, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    { name: 'Smart Full Body Checkup', price: '3000' , x: '20', y: '97' ,discount:72, description: 'It assesses your risks for potential health diseases and helps in health monitoring.' },
    // Add more packages here
  ];
    
  return (
    <div className=' w-full max-w-1200'>
    <div className='relative left-[5rem]  '>
       <h2 className='text-xl text-blue-800'>Top packages</h2>
    </div>
    <div className='relative flex items-center overflow-x-hidden mx-0px-2 '>
       <div className='bg-gray-400 mx-2 px-1 rounded-lg z-10'>
       <MdChevronLeft size={40} onClick={prevSlide}/>
       </div>
        <div id='slides' className='w-full h-full overflow-x-scroll scroll mx-4 px-2 gap-[2rem] whitespace-normal scroll-smooth scroll-hidden'>
        {healthPackages.map((item, index) => (
        
        <PackageBlock key={index}
            name={item.name}
            //className='w-[340px] inline-block p-2 cursor-pointer rounded-[1rem] hover:scale-105 ease-in-out duration-300'
       
            x={item.x}
            y={item.y}
            description={item.description}
            price={item.price}
            discount={item.discount} />
      ))}
      </div>
      <div className='bg-gray-400 rounded-lg z-10'>
      <MdChevronRight size={40} onClick={nextSlide} />
      </div>
    </div>

 
    </div>
  )
}

export default PackageSlide
