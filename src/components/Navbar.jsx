import React, { useState } from 'react';
import pic from '../../public/image/hack.jfif';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [menu, setMenu]=useState(false)
    const navItems=[
      {
        id:1,
        text:"Home"
      },
      {
        id:2,
        text:"About"
      },
      {
        id:3,
        text:"Portfolio"
      },
      {
        id:4,
        text:"Experince"
      },
      {
        id:5,
        text:"Contact"
      }
    ]
  return (
    <>
      <div name='Navbar' className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex justify-between items-center h-16'> 
            <div className='flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full'alt="" />
                <h1 className=' font-semibold  cursor-pointer text-xl'>Dev<span className='text-green-500 text-2xl'>NDRA</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>
            <div>
                <ul className='hidden md:flex space-x-9'>
                   {navItems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-200 cursor-pointer ' key={id}>
                      <Link to={text}
                      smooth={true}
                      activeClass='active'
                      duration={500}
                      offset={-70}>{text}</Link>
                      </li>
                      
                   ))}



                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>{menu?<IoCloseSharp  size={24}/>:<AiOutlineMenu size={24}/>}</div>
            </div>
        </div>
        {
            menu &&(
                <div className='bg-white'>
                <ul className='md:hidden flex flex-col  items-center justify-center h-screen text-xl space-y-3'>
                {navItems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-200 text-semibold cursor-pointer 'key={id}>
                       <Link onClick={()=>setMenu(!menu)} to={text}
                      smooth={true}
                      activeClass='active'
                      duration={500}
                      offset={-70}>{text}</Link>
                      
                      
                      
                      </li>
                   ))}
                </ul>
            </div>

            )
        }
        


      </div>
    </>
  )
}

export default Navbar