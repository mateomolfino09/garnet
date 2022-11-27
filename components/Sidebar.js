import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider';
import {Link} from 'react-scroll'

const Sidebar = () => {
  const { setActiveMenu,  activeMenu} = useStateContext();

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-end items-center '>
          <button
            type="button"
            onClick={() => setActiveMenu(!activeMenu)}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block xl:hidden text-black"
          >
            <MdOutlineCancel />
          </button>

         
        </div>
 <div className="xl:hidden" id="mobile-menu">
							<div
								className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									onClick={() => window.location.reload(false)}
									to="/"
									smooth='true'
									offset={50}
									duration={500}
									className="cursor-pointer text-black hover:text-white block px-3 py-9 rounded-md text-xl font-medium"
								>
									Home
								</Link>
								<Link
									to="about"
									smooth='true'
									offset={50}
									duration={500}
									className="cursor-pointer text-black hover:text-white block px-3 py-9 rounded-md text-xl font-medium"
								>
									About
								</Link>

								<Link
									to="markets"
									smooth='true'
									offset={50}
									duration={500}
									className="cursor-pointer text-black hover:text-white block px-3 py-9 rounded-md text-xl font-medium"
								>
									Markets
								</Link>
								<Link
									to="contact"
									smooth='true'
									offset={50}
									duration={500}
									className="cursor-pointer text-black hover:text-white block px-3 py-9 rounded-md text-xl font-medium"
								>
									Contact Us
								</Link>
							</div>
						</div>

      </>)}
    </div>
  )
}

export default Sidebar
