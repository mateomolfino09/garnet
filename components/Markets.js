import React from 'react'
import Subtitle from './Subtitle'

const Markets = () => {
  return (
    <div>
       <div className='w-full relative overflow-hidden mt-20 mb-20 px-6 sm:px-12 lg:px-16' id='markets'>
            <Subtitle subtitle={'Markets we serve'}/>
            <div className='flex flex-wrap flex-col md:flex-row w-full min-h-fit overflow-auto items-center justify-between mt-16'>
                <div className='flex flex-wrap flex-col justify-center items-center mb-6'>
                <img src="./market1.png" className='my-3 max-w-[136px] max-h-[136px] lg:max-h-[199px] lg:max-w-[199px]' alt="Foodstuff Icon" />
                <h3 className='font-medium text-xs lg:text-2xl'> Foodstuff </h3>
                </div>
                <div className='flex flex-wrap flex-col justify-center items-center mb-6'>
                <img src="./market2.png" className='my-3 max-w-[136px] max-h-[136px] lg:max-h-[199px] lg:max-w-[199px]' alt="Animal Fed Icon" />
                <h3  className='font-medium text-xs lg:text-2xl'> Animal Feed </h3>
                </div>
                <div className='flex flex-wrap flex-col justify-center items-center mb-6'>
                <img src="./market3.png" className='my-3 max-w-[136px] max-h-[136px] lg:max-h-[199px] lg:max-w-[199px]' alt="Diesel Icon" />
                <h3 className='font-medium text-xs lg:text-2xl'> Renewable Diesel </h3>
                </div>

             </div>
        </div>
    </div>
  )
}

export default Markets
