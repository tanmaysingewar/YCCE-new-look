import React from "react";
import { Meteors } from "@/components/ui/meteors";

export function MeteorsDemo() {
  return (
    <div >
      <div className=" h-3/4 md:h-1/2 relative m-4 mt-6">
        <div className="absolute inset-0 h-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col ">
          <div className=''>
          <h1 className="text-[30px] font-bold text-white text-center">BEST PRIVATE COLLEGE <br/>IN <span className='text-[#3092DD]'>NAGPUR</span> </h1>
          <p className='text-center text-white mt-5'>Annual research budget of Rs 15 Crores, 60+ Research Centres, 20+ Centres <br/> of Excellence to inspire innovation & nurture inquisitive minds.</p>
          
          </div>
          <div className='grid md:grid-cols-4 sm:grid-cols-2 mt-5 m-auto'>

          <div className='p-8'>
          <h1 className='text-white font-bold text-[28px]'>139th</h1>
          <p className='font-medium text-[16px] text-[#3092DD]'>All India Ranked</p>
          <p className='text-white font-normal text-[14px]'>by NIRF, MHRD, Govt. of India</p>
          </div>
          <div className='p-8'>
          <h1 className=' font-bold text-white text-[28px]'>Grade 'A'</h1>
          <p className='font-medium text-[16px] text-[#3092DD]'>Awarded</p>
          <p className='text-white font-normal text-[14px]'>by Govt. of Maharashtra</p>
          </div>
          <div className='p-8'>
          <h1 className='text-white font-bold text-[28px]'>NAAC 'A++'</h1>
          <p className='font-medium text-[16px] text-[#3092DD]'>Graded  </p>
          <p className='text-white font-normal text-[14px]'>by NAAC, Bangalore</p>
          </div>
          <div className='p-8'>
          <h1 className='text-white font-bold text-[28px]'>38 years</h1>
          <p className='font-medium text-[16px] text-[#3092DD]'>of Establishment</p>
          <p className='text-white font-normal text-[14px]'>since 1984</p>
          </div>
        </div>
        <Meteors number={25} />
        </div>
       
      </div>
    </div>
  );
}
