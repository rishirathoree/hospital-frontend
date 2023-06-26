import React, { useState } from 'react'
import doctor from '../Assets/Images/doc.jpg'
const LoginPage = () => {
  

  return (
    <>
    <div className='flex flex-col items-center h-screen bg-blue-50/50 justify-start p-20'>
        <div className='lg:w-1/2 md:w-1/2 sm:w-full grid lg:h-80 md:h-80 sm:h-full lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center shadowtable rounded-lg overflow-hidden'>
          <div className='overflow-hidden lg:block md:hidden sm:hidden h-full w-full'>
            <img src={doctor} className='w-full h-full object-cover' alt="" />
          </div>
          <div className='flex items-start flex-col justify-between p-4 space-y-4'>
            <div>
            <p className='font-bold text-xl'>Login to Kedi</p>
            <p className='font-medium text-slate-500 text-xsm'>Enter your login details</p>
            </div>

            <div className='w-full h-full flex flex-col gap-4'>

            <label htmlFor="email" className='w-full'>
              <p className='font-semibold text-xsm'>Enter Email</p>
              <input placeholder='Enter Your Email' type=" email" className='w-full font-light text-xsm focus:outline-none outline-none p-2 ring-1 ring-black/5 rounded' />
            </label>

            <label htmlFor="Password" className='w-full'>
              <p className='font-semibold text-xsm'>Enter Password</p>
              <input placeholder='*****' type=" password" className='w-full font-light text-xsm focus:outline-none outline-none p-2 ring-1 ring-black/5 rounded' />
            </label>

            <button className='font-semibold text-xsm text-white bg-blue-400 p-2 w-full'>Send</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default LoginPage;