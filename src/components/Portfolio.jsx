import React from 'react';
import python from '../../public/image/pythonlogo.png';
import javascript from '../../public/image/jvascript.jfif';
import mongodb from '../../public/image/mongodblogo.png';
import expessjs from '../../public/image/exjs1.png';

import react from '../../public/image/reactlogo.png';
import nodejs from '../../public/image/node.png';


const Portfolio = () => {
  const cardItems=[
    {
      id:1,
      logo:python,
      name:"Python"

    },
    {
      id:2,
      logo:javascript,
      name:"JavaScript"

    },
    {
      id:3,
      logo:mongodb,
      name:"mongoDB"

    },
    {
      id:4,
      logo:expessjs,
      name:"ExpressJS"

    },
    {
      id:5,
      logo:react,
      name:"React"

    },
    {
      id:6,
      logo:nodejs,
      name:"NodeJS"

    }
  ]
  return (
    <div name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='font-bold mb-5 text-3xl mt-0'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Project</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4  mt-16 '>
                       {
                        cardItems.map(({id,logo,name})=>(
                          <div className='md:w-[270px] md:h-[270px] rounded-lg border-[2px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300  mb-8' key={id}>
                             <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                             <div>
                              <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                              <div className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                              <div className=' justify-around space-x-3 py-3 p-2'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 font-bold rounded'>Vedio</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white px-4 py-2 font-bold rounded'>Source Code</button>
                              </div>
                             </div>
                            
                          </div>

                        )

                        )
                       }
        </div>
      
    </div>
  )
}

export default Portfolio
