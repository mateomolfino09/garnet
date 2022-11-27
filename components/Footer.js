import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer className='w-screen h-[72px] md:h-[121px] bg-white'>
                <div className='h-full flex items-center justify-center'>
                    <img src="./logoblack.png" alt="Garnet International Trading Corp. Logo" className='max-h-[50px] max-w-[180px] md:max-h-[72px] md:max-w-[290px] lg:max-h-[96px] lg:max-w-[361px]' onClick={() => window.location.reload(false)} />
                </div>
                
            </footer>
    </div>
    
            
  )
}

export default Footer
