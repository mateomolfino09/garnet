import React from 'react'
import Subtitle from './Subtitle'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

const AboutUs = () => {
  return (     
    <div>
        <div className='w-full relative overflow-hidden mt-20 pl-12 px-6 md:px-12 ' id='about'>
            <Subtitle subtitle={'About Us'}/>
            <div className='lg:pl-40'>
              <p className='lg:font-light font-light text-xs lg:text-lg'>    Garnet International has become a trusted partner with strong ties to the slaughtering and agriculture sectors. Our role has evolved as specialized merchants with established relationships worldwide.</p>
              <p className='lg:font-light font-light text-xs lg:text-lg mb-4'>Our involvement in the global marketplace has enabled us to identify emerging markets and anticipate market trends. These insights allow us to secure fair deals with suppliers and clients. </p>
              <p className='lg:font-light font-light text-xs lg:text-lg mb-4' >Our headquarters in the United States puts us in a scenario with sustained demand for renewable energy feedstock and other sectors. </p>
              <p className='lg:font-light font-light text-xs lg:text-lg mb-4'>Our work is based on these 4 principles:</p>
              <p className={`lg:font-semibold font-bold text-xs lg:text-lg ${poppins.className}`}>Hard work
              </p>
              <p className={`lg:font-semibold font-bold text-xs lg:text-lg ${poppins.className}`}>Honesty
              </p>
              <p className={`lg:font-semibold font-bold text-xs lg:text-lg ${poppins.className}`}>Integrity
              </p>
              <p className={`lg:font-semibold font-bold text-xs lg:text-lg ${poppins.className}`}>Professionalism
              </p>
            </div>
            
        </div>
    </div>
      )
}

export default AboutUs
