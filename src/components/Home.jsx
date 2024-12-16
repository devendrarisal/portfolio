import React from "react"
import { FaFacebookSquare, FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { ReactTyped} from "react-typed";
import pic from '../../public/image/hack.jfif';












const Home = () => {
  return (
    <>
      <div name='Home' className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
        <span>Welcome in my feed</span>
        <div className="space-x-1 text-2xl md-text-4xl"><h1>Hello, I'm a  <ReactTyped
          className="text-red-700 font-bold"
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={60}
          backSpeed={60}
          loop={true}
        /></h1>
        </div>
        <br />
        <p className="text-sm md:text-md text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, repellat voluptatem iusto animi labore tenetur ea, odio accusamus error incidunt maiores pariatur. Perspiciatis optio, temporibus expedita dolore at soluta rem?</p>
    <br />
    {/*social media icon*/}
    <div className="flex  space-x-16  space-y-0 md:space-y-0 ">
    <div className="space-y-2 " >
        <h1 className="font-bold  ">Available On</h1>
        <ul className="flex space-x-2 text-2xl cursor-pointer  ">
            <li><a href="https://www.facebook.com/devendra.risal.5" target="_blank"><FaFacebookSquare /></a></li>
            <li><a href="https://www.linkedin.com/in/cr7-devendra-risal-msd7-9543a8180/" target="blank"><FaLinkedin /></a> </li>
            
            <li><a href="https://www.instagram.com/devendrarisal/" target="_blank">
            <FaSquareInstagram /></a></li>
            <li> <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><BiLogoGmail /></a></li>
            
            
        </ul>






</div>
<div className="space-y-2 ">
<h1 className="font-bold ">Currently Working ON</h1>
        <ul className="flex space-x-2 text-2xl cursor-pointer rounded-full duration-200">
            <li> <SiMongodb />
            </li>
            <li> <SiExpress /></li>
            <li> <SiReact />
            </li>
            <li><FaNodeJs/></li>
           
        </ul>

</div>
</div>
        </div>
    
        <div className="md:w-1/2 md:mt-20 md:ml-48 mt-8 order-1">
        <img src={pic} className="rounded-full md:h-[400px] md:w-[400px] h-[250px] w-[250px]"alt="" />
        </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home
