//import React, { useState } from 'react'
import {Link, NavLink } from 'react-router-dom';
import {BiCartAlt} from 'react-icons/bi'


const Navbar = ({cartCount}) => {


    const navItems = [
        {
            id: 1,
            label: "home" ,
            link: '/',
        },
        {
            id: 2,
            label: "book a test" ,
            link: '/TestList',
        },
        {
            id: 5,
            label: "booking & reports" ,
            link: '/TestList',
        },
        {
            id: 3,
            label: "sign in" ,
            link: '#',
        },
        
        {
            id: 4,
            label: (<> <BiCartAlt size={28}  /> { cartCount > 0 && ( <div className='absolute top-3 right-20 z-10 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs'> {cartCount} </div> ) }</>) ,
            link: '#',
        },

       

    ];


   

  return (
    <>
    <div className='box-border overflow-hidden w-[100%] bg-white shadow-md shadow-gray-400'>
      <div className='h-16  flex items-center  justify-around'>
        <div className='md:items-center capitalize text-blue-800 px-2 py-auto font-medium'>
            <span>U.K </span>
            <span>Diagnostics</span>
        </div>
        <ul className='hidden md:flex md:items-center '>
       { navItems.map(({id ,link, label})  => (
        <li key={id}
        className=' px-4 py-auto cursor-pointer items-center font-medium capitalize justify-end text-blue-800 hover:scale-105 duration-200'
        ><NavLink to ={link}>
            {label}
            </NavLink>
        </li>
        
       ))}
       </ul>
      </div>
    </div>
    <div className=' flex  bg-gray-200 h-14 justify-evenly items-center shadow-sm shadow-gray-300'>
        <div className='flex  gap-6 px-4 sm:items-center py-auto'>
            <span>
            <Link to= "/BookAppointment">
            <button className='bg-blue-700 px-2 py-1 rounded-md capitalize text-white hover:scale-105 duration-200'
            >
                Book appointment</button>
            </Link>
            </span>
            <span className='hover:scale-105 duration-200'>+91 7060174626</span>
            <span className='hover:scale-105 duration-200'>zubairalamraza@gmail.com</span>
        </div>

    </div>
    </>
  )
}

export default Navbar






