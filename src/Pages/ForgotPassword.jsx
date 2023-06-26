import React, { useState } from 'react'
import doctor from '../Assets/Images/doc.jpg'
const ForgotPassword = () => {
  

  return (
    <>
    <div className='flex flex-col items-center h-screen bg-blue-50/50 justify-start p-20'>
        <div className='w-1/2 grid h-60 grid-cols-2 justify-center items-center shadowtable rounded-lg overflow-hidden'>
          <div className='overflow-hidden h-full w-full'>
            <img src={doctor} className='w-full h-full object-cover' alt="" />
          </div>
          <div className='flex items-start flex-col justify-between p-4 space-y-4'>
            <div>
            <p className='font-bold text-xl'>Forgot Password</p>
            <p className='font-light text-slate-500 text-xsm'>Enter your email address</p>
            </div>
            <label htmlFor="email" className='w-full space-y-2'>
              <p className='font-semibold text-xsm'>Enter Email</p>
              <input type=" text" className='w-full font-light text-xsm focus:outline-none outline-none p-2 ring-1 ring-black/5 rounded' />
            <button className='font-semibold text-xsm text-white bg-blue-400 p-2 w-full'>Send</button>
            </label>
          </div>
        </div>
    </div>
    </>
  )
}

export default ForgotPassword;