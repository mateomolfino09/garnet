import React from 'react'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

const HeroBanner = () => {
  

  return (
    <div>
    <div className='w-full relative overflow-hidden mt-12'>
      <div className='w-full h-full bg-cover bg-center max-h-screen '>
        <img src='./globalBig.png' alt="Garnet International Trading Corp. Global Img" className="w-full h-full object-cover"/>
      </div>
      <div className='absolute flex flex-col justify-center text-center ml-auto mr-auto left-0 right-0 top-0 lg:top-10 scroll-smooth'>
        <div className='flex justify-center md:py-12 pt-8 mt-4'>
            <img src="./isotipoOficial.png" alt="Garnet International Trading Corp. Logo" className='w-1/5 h-1/5'/>
        </div>
        <h1 className={`mt-2 sm:mt-10 font-extrabold text-white drop-shadow-lg shadow-black text-xl sm:text-5xl lg:text-4xl md:mt-0 ${poppins.className}`}>Global Reach.</h1>
        <h1 className={`font-extrabold text-white drop-shadow-lg shadow-black text-xl sm:text-5xl lg:text-4xl md:mt-0 lg:mt-2 ${poppins.className}`}>
        Personalized Service.</h1>

      </div>
  </div>
  
</div>
  )
}

export default HeroBanner
