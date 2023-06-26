import React, { useState } from 'react'
import doctor from '../Assets/Images/doc.jpg'
const Otpverification = () => {
  

  return (
    <>
    <div className='flex flex-col items-center h-screen bg-blue-50/50 justify-start p-20'>
        <div className='lg:w-1/2 md:w-1/2 sm:w-full grid lg:h-80 md:h-80 sm:h-full lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center shadowtable rounded-lg overflow-hidden'>
          <div className='overflow-hidden lg:block md:hidden sm:hidden h-full w-full'>
            <img src={doctor} className='w-full h-full object-cover' alt="" />
          </div>
          <div className='flex items-start flex-col justify-between p-4 space-y-4'>
            <div>
            <p className='font-bold text-xl'>OTP verification</p>
            <p className='font-medium text-slate-500 text-xsm'>Lorem ipsum dolor sit amet</p>
            </div>

            <div className='w-full h-full flex flex-col gap-4'>

            
            <div className='flex items-center justify-between'>
              <input type="number" maxLength='1' className='w-10 appearance-none p-2 focus:ring-1 focus:ring-blue-500 ring-1 ring-black/20 outline-none focus:outline-none duration-200 rounded-md' />
              <input type="number" maxLength='1' className='w-10 appearance-none p-2 focus:ring-1 focus:ring-blue-500 ring-1 ring-black/20 outline-none focus:outline-none duration-200 rounded-md' />
              <input type="number" maxLength='1' className='w-10 appearance-none p-2 focus:ring-1 focus:ring-blue-500 ring-1 ring-black/20 outline-none focus:outline-none duration-200 rounded-md' />
              <input type="number" maxLength='1' className='w-10 appearance-none p-2 focus:ring-1 focus:ring-blue-500 ring-1 ring-black/20 outline-none focus:outline-none duration-200 rounded-md' />
              <input type="number" maxLength='1' className='w-10 appearance-none p-2 focus:ring-1 focus:ring-blue-500 ring-1 ring-black/20 outline-none focus:outline-none duration-200 rounded-md' />
            </div>

            <div>
            <p className='font-medium text-black text-center text-xsm'>Don't Received OTP?</p>
            <p className='font-medium text-blue-500 text-center text-xsm'>Resend</p>
            </div>

            <button className='font-semibold text-xsm text-white bg-blue-400 p-2 w-full'>Verify</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Otpverification;