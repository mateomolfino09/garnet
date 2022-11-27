import React from 'react'

const ImageLayer = () => {
  return (
    <div className='flex flex-wrap w-full min-h-fit overflow-auto justify-center mt-16 px-6 md:pl-0'>
      <img src="./img1.png" className='lg:mr-6 sm:mr-4 mr-2 my-3 max-w-[170px] max-h-[168px] lg:max-w-[310px] lg:max-h-[304px]' alt="Port Aerial Image" />
      <img src="./img2.png" className='lg:mr-6 sm:mr-4  mr-2 my-3 max-w-[170px] max-h-[168px] lg:max-w-[310px] lg:max-h-[304px]' alt="Farmaland" />
      <img src="./img3.png" className='lg:mr-6 sm:mr-4 mr-2 my-3 max-w-[170px] max-h-[168px] lg:max-w-[310px] lg:max-h-[304px]' alt="Combine Harvester Working in the wheat field" />
      <img src="./img4.png" className='lg:mr-0 sm:mr-0  mr-2 my-3 max-w-[170px] max-h-[168px] lg:max-w-[310px] lg:max-h-[304px]' alt="Aerial View of Gas and Oil Refinery At Oil Industry" />

    </div>
  )
}

export default ImageLayer
