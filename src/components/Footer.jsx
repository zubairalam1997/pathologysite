import React from 'react'
//import PackageBlockTwo from './PackageBlockTwo'

import {FaFacebook ,FaInstagram,FaTwitter} from 'react-icons/fa'



const Footer = () => {
  return (
    <>
    
    <div className='flex px-4 pt-6 justify-center gap-[8rem] h-full overflow-hidden  bg-blue-800'>
        <div className='text-white flex flex-col'>
            <p>Connect with us</p>
            <p>7060174626</p>
            <p>zubairalamraza@gmail.com</p>
            <p>Location</p>
            <p>Telegram</p>
        </div>
        <div className='text-white flex flex-col'>
            <p>Follow us on</p>
            <FaFacebook size={40} />
            <FaInstagram size={40} />
            <FaTwitter size={40} />
        </div>
        <div className='text-white flex flex-col'>
            <p>Quick links</p>
            <p>About us</p>
            <p>FAQs</p>
            <p>partners</p>
            <p>book a test</p>
        </div>
      
    </div>
    </>
  )
}

export default Footer
