import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    const [showAccountDropdown,setShowAccountDropdown] = useState(false)
    const navs = ['Unapproved Professional','Unapproved Patient','Professionals','Patients','Add New','Hospitals']
  return (
    <div className='flex items-center justify-between lg:px-40 md:px-20 sm:px-4 duration-500 py-4 bg-blue-400'>
        <Link to="/"><p className='font-bold text-white text-lg'>Kedi</p></Link>
        <div className='flex items-center gap-4 '>
            <ul className=' lg:inline-flex md:inline-flex sm:hidden gap-4 items-center'>
                {navs.map((item,index)=>{
                    return(
                        <Link key={index} to={`${item.split(' ').join('-')}`}><li><p className={`font-medium text-xsm ${location.pathname.includes(item.split(' ').join('-')) ? 'text-black' : 'text-white'}`}>{item}</p></li></Link>
                    )
                })}
            </ul>
            <div className='flex items-center gap-4'>
            <Link to="/Notification"><i className="fa text-white fa-lg fa-bell-o" aria-hidden="true"></i></Link>
            

            {/* Drodpwon with profile */}
            <div className='relative'>
            <div onClick={()=>{setShowAccountDropdown(!showAccountDropdown)}} className='w-10 h-10 rounded-full bg-white'></div>
            <div className={`absolute top-12 rounded-md shadow right-0 duration-200 bg-white ${showAccountDropdown ? 'visible opacity-100 translate-x-0 translate-y-0 scale-100' : 'invisible opacity-0 translate-x-4 -translate-y-8 scale-75'}`}>
                <ul className='w-full'>
                <li><Link to="/my-account"><p className='font-medium w-max text-black pl-4 pr-12 text-left border-b py-3 text-xsm'>My Account</p></Link></li>
                <li><p className='font-medium w-max text-black pl-4 pr-12 text-left py-3 text-xsm'>Logout</p></li>
                <li><Link to="/login"><p className='font-medium w-max text-black pl-4 pr-12 text-left border-b py-3 text-xsm'>My Account</p></Link></li>
                <li><Link to="/forgotpassword"><p className='font-medium w-max text-black pl-4 pr-12 text-left border-b py-3 text-xsm'>My Account</p></Link></li>
                <li><Link to="/otp-verification"><p className='font-medium w-max text-black pl-4 pr-12 text-left border-b py-3 text-xsm'>My Account</p></Link></li>
                </ul>
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar