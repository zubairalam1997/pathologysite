import React from 'react';
import heart from '../images/heart.png';
import thyroid from '../images/thyroid.png';
import diabetes from '../images/sugar.png';
import fullBody from '../images/fullBody.png';
import vitamin from '../images/vitamin.png';
import joint from '../images/joint.png';

const frequentPicks = [
  { id: 1, imgSrc: heart, altText: 'heart' ,blockName:'heart' },
  { id: 2, imgSrc: thyroid, altText: 'thyroid',blockName:'thyroid' },
  { id: 3, imgSrc: diabetes, altText: 'diabetes',blockName:'diabetes' },
  { id: 4, imgSrc: fullBody, altText: 'full-body' , blockName:'full body check' },
  { id: 5, imgSrc: vitamin, altText: 'vitamins',blockName:'vitamins' },
  { id: 6, imgSrc: joint, altText: 'joint' ,blockName:'joints' },
];


const Midbody = () => {
  return (
    <div>
      <h1 className='flex py-4 relative left-[5rem] text-blue-800 font-bold text-xl'>Frequent picks</h1>
      <div className='flex px-4 py-6 gap-20 justify-center'>
        {frequentPicks.map(({ id, imgSrc,blockName, altText }) => (
          <div
            key={id}
            className='flex flex-col h-20 w-[9rem] border-gray-300 border-2 justify-center items-center rounded-md shadow-md shadow-gray-400'
          >
            <span><img src={imgSrc} alt={altText} className='h-[2.5rem] w-[2.5rem]  m-0 ' /></span>
            <span>{blockName}</span>
            
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Midbody;
