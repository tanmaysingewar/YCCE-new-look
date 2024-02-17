import React from 'react'

function WhatMakesUsUnique() {
  return (
  <div className="mt-14">
    <p className="text-[30px] font-bold text-black text-center">
      WHAT MAKES<span className="text-[#3092DD]"> YCCE</span> UNIQUE?
    </p>
    <div className="max-w-[40rem] relative m-auto">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px]  blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-lg" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
    </div>
    <p className="text-center text-black md:m-auto mt-5 text-sm m-4 font-medium md:max-w-[600px] md:mt-4">
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry.Lorem ipsum has been the industry's standard dummy text ever
      since the 1500s
    </p>
    <div className='flex justify-center mt-10'>
      <iframe
        src="https://www.youtube.com/embed/ttZg5moxGRo?si=W-IrDyVlmV9lsv2H&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className='md:w-[60%] md:h-[30rem] rounded-md'
      ></iframe>
    </div>
  </div>
  )
}

export default WhatMakesUsUnique