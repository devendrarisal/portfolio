import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>

    <div className=' flex flex-col items-center justify-center'>
        <h3 className='items-center mb-2'>Connect On</h3>
        <div className='flex  space-x-4'>
            <ul className="flex space-x-2 text-2xl cursor-pointer  ">
                        <li><a href="https://www.facebook.com/devendra.risal.5" target="_blank"><FaFacebookSquare /></a></li>
                        <li><a href="https://www.linkedin.com/in/cr7-devendra-risal-msd7-9543a8180/" target="blank"><FaLinkedin /></a> </li>
                        
                        <li><a href="https://www.instagram.com/devendrarisal/" target="_blank">
                        <FaSquareInstagram /></a></li>
                        <li> <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><BiLogoGmail /></a></li>
                        
                        
                    </ul>
        </div>
    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col item-center'>
        <p className='text-sm text-gray-400 text-center'>&copy; 2024 Devendra Risal Upadhaya. All rights reserved.</p>
    </div>
    </div>
<div/>
        </div>
    </footer>
</>
  )
}

export default Footer
