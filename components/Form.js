import React from 'react'
import Subtitle from './Subtitle'

const Form = () => {
  return (
    <div className='flex flex-wrap flex-col md:flex-row bg-dark-light' id='contact'>
        <div className='sm:mx-auto sm:w-full md:w-1/2 py-12 px-2 sm:pl-6 sm:px-12 lg:px-16'>
        <Subtitle 
            subtitle={'Contact Us'}
            isWhite={true}/>
        <form action="" method='POST' className='mb-0 rounded-xl lg:pl-40'>
            <div className='mt-4 flex items-center justify-center'>
            <input type="text" required name='name' placeholder='Name (required)' autoComplete='nombre' className='w-[360px] h-[32px] border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary '
            /> 
            </div>
            
            <div className='mt-4 flex items-center justify-center'>
            <input type="text" required name='email' autoComplete='email' placeholder='Email (required)' className='w-[360px] h-[32px]  border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
            />
            </div>
        
            <div className='mt-4 flex items-center justify-center'>
            <input type="text" required name='subject' autoComplete='subject' placeholder='Subject' className='w-[360px] h-[32px] border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
            /> 
            </div>
            <div className='mt-4 flex items-center justify-center'>
            <textarea type="text" size="100" required name='subject' autoComplete='subject' placeholder='Message' className='w-[360px] border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-[136px]'
            /> 
            </div>
            <div className='flex justify-center items-center'>
                <button type='submit' className='mt-6 w-[170px] h-32px] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-green-light hover:bg-lessblue focus:outline-none focus:ring-offset-2 focus:ring-primary '>Submit</button>
            </div>
        </form>
        </div>
        <div className='flex flex-col justify-center md:w-1/2 items-center mb-8 sm:mx-auto sm:w-full p-12 px-6 sm:px-12 lg:px-16'>
            <h4 className='text-white text-lg md:text-2xl mb-8'>Email Contact</h4>
            <div className='flex flex-col justify-center items-center mb-4'>
                <h5 className='text-white text-base md:text-xl'>Management</h5>
                <p className='text-white text-xs md:text-lg'>management@garnetinternational.us</p>
            </div>
            <div className='flex flex-col justify-center items-center mb-4' >
                <h5 className='text-white text-base  md:text-xl'>Sales</h5>
                <p className='text-white text-xs md:text-lg'>sales@garnetinternational.us</p>
            </div>
            <div className='flex flex-col justify-center items-center mb-4'>
                <h5 className='text-white text-base md:text-xl'>Execution</h5>
                <p className='text-white text-xs md:text-lg'>execution@garnetinternational.us</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h5 className='text-white text-base md:text-xl'>Finance</h5>
                <p className='text-white text-xs md:text-lg'>finance@garnetinternational.us</p>
            </div>

        </div>
    </div>
      
  )
}

export default Form
