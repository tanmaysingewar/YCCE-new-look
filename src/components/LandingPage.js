'use client'
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import log1 from '@/../public/log1.svg'
import log2 from '@/../public/log2.svg'
import log3 from '@/../public/log3.svg'
import log4 from '@/../public/log4.svg'
import logG from '@/../public/log-group.svg'

function LandingPage() {
  return (
    <div style={{backgroundImage : `linear-gradient(to right bottom, #000000, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.6)), url('https://images.shiksha.com/mediadata/images/1552039026php8wnYCG.png')`,height : '83%'}} className="flex flex-row resize-none justify-between mx-2 mt-2 rounded-lg bg-no-repeat bg-cover bg-bottom">
      <div className="p-5 flex flex-col lg:justify-around  md:ml-[50px] mt-1 md:mt-0">
        <div className="">
          <p className=" text-xl lg:text-3xl font-semibold text-[#F6A602] mb-2">Welcome to</p>
          <p className="font-bold text-3xl  text-white  lg:text-5xl">
            <span className='bg-[#F6A602] px-[4.5px] md:bg-transparent md:px-0' >Y</span>ESHWANTRAO <span className='bg-[#F6A602] px-1 md:bg-transparent md:px-0' >C</span>HAVAN
          </p>
          <p className="font-bold text-3xl lg:text-4xl  text-white">
          <span className='bg-[#F6A602] px-1 md:bg-transparent md:px-0'>C</span>OLLEGE OF <span className='bg-[#F6A602] px-[6.1px] md:bg-transparent md:px-0'>E</span>NGINEERING
          </p>
          <p className="text-xs font-sans text-white max-w-[950px] mt-2">
            Yeshwantrao Chavan College of Engineering was established in the year 1984 by Nagar Yuwak Shikshan Sanstha, Nagpur. YCCE is the prominent institution acknowledged for remarkable engineering education and research.
          </p>
          <Button className='bg-[#F6A602] mt-8'>View More</Button>
          <div className='flex flex-row mt-20'>
            {/* <Image 
              src={logG}
              width={400}
              height={400}
            /> */}
          </div>
        </div>
        <div className="bg-[#242e3b9e] lg:hidden  mt-2 p-2 h-36 overflow-scroll overflow-x-hidden rounded-lg scroll-m-1 px-3">
          <div className="flex justify-between">
            <p className="text-white font-bold mb-1">Notice</p>
            {/* <p className='text-white font-medium mb-1 text-sm'>Date: {new Date().toLocaleDateString()}</p> */}
          </div>
          <hr className="bg-[#ffffff] h-0.5 mb-2" />
          <li className="text-white text-xs mb-1">
            Yeshwantrao Chavan College of Engineering was established in the
            year 1984 by Nagar Yuwak Shikshan Sanstha, Nagpur.{" "}
          </li>
          <li className="text-white text-xs mb-1">
            YCCE is the prominent institution acknowledged for remarkable
            engineering education and research.{" "}
          </li>
          <li className="text-white text-xs mb-1">
            YCCE is the prominent institution acknowledged for remarkable
            engineering education and research.{" "}
          </li>
          <li className="text-white text-xs mb-1">
            YCCE is the prominent institution acknowledged for remarkable
            engineering education and research.{" "}
          </li>
          <li className="text-white text-xs mb-1">
            YCCE is the prominent institution acknowledged for remarkable
            engineering education and research.{" "}
          </li>
        </div>
      </div>
      <div>
        <div className='bg-[#242e3b9e] p-4 m-10 hidden lg:block max-w-[500px]'>
          <div className='flex justify-between'>
          <p className='text-white font-bold mb-1'>Notice</p>
            {/* <p className='text-white font-medium mb-1 text-sm'>Date: {new Date().toLocaleDateString()}</p> */}
          </div>
          <hr className='bg-[#ffffff] h-0.5 mb-2'/>
          <li className='text-white text-xs mb-1'>Yeshwantrao Chavan College of Engineering was established in the year 1984 by Nagar Yuwak Shikshan Sanstha, Nagpur. </li>
          <li className='text-white text-xs mb-1'>YCCE is the prominent institution acknowledged for remarkable engineering education and  research. </li>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
