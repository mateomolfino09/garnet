import React from 'react'

const Subtitle = ({ subtitle, isWhite }) => {
  return (
    <div className={`flex items-center mb-12 ${ isWhite ? 'pl-4 sm:pl-0 lg:pl-40' : 'lg:pl-40'}`}>
        <span className=" md:h-7 md:w-7 h-4 w-4 bg-green-light rounded-full inline-block mr-3"></span>
        <h2 className={`font-semibold text-xl md:text-3xl lg:text-4xl ${ isWhite ? 'text-white' : 'text-black'}`}>{subtitle}</h2>
    </div>
  )
}

export default Subtitle
