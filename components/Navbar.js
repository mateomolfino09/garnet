import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { useStateContext } from '../contexts/ContextProvider';
import HeroBanner from './HeroBanner';


function Navbar() {
    const { setActiveMenu,  activeMenu} = useStateContext();

    return (
        <div className=''>
        <nav className='shadow-sm w-full z-10 bg-black'>
            <div className="w-full">
                <div className='flex items-center h-20 w-full'>
                    <div className='flex items items-center md:mx-20 ml-8 mr-20 justify-between w-full'>
                        <div className='flex justify-start items-center flex-shrink-0'>
                            <img src='/logowhite.png' alt="Garnet International Trading Corp. Logo" className='md:h-[59px] md:w-[220px] h-[31px] w-[126px]rounded-full' onClick={() => window.location.reload(false)} />
                        </div>
                        <div className="hidden lg:block">
                            <div className='ml-10 flex items-baseline space-x-4'>
                                <Link 
                                    onClick={() => window.location.reload(false)}
                                    to='/'
                                    smooth='true'
                                    duration={500}
                                    className='cursor-pointer text-white hover:text-white px-3 py-2 rounded-md text-base hover:font-black font-semibold'>
                                        Home
                                </Link>
                                <Link 
                                    to='about'
                                    smooth='true'
                                    duration={500}
                                    className='cursor-pointer text-white hover:text-white px-3 py-2 rounded-md text-base hover:font-black font-semibold'>
                                        About
                                </Link>
                                <Link 
                                    to='markets'
                                    smooth='true'
                                    duration={500}
                                    className='cursor-pointer text-white hover:text-white px-3 py-2 rounded-md text-base hover:font-black font-semibold'>
                                        Markets
                                </Link>
                                <Link 
                                    to='contact'
                                    smooth='true'
                                    duration={500}
                                    className='cursor-pointer text-white hover:text-white px-3 py-2 rounded-md text-base hover:font-black font-semibold'>
                                        Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mr-10 flex lg:hidden ">
							<button
								onClick={() => setActiveMenu(!activeMenu)}
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-black"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!activeMenu ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
                <div>    
            </div>                                                
        </nav>
        
        </div>
    )
}

export default Navbar
