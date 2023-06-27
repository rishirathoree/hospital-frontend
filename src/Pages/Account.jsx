import React from 'react'

const Account = () => {
  return (
    <div className='flex flex-col items-center h-screen bg-blue-50/50 justify-center lg:p-16 md:p-16 sm:p-4'>
        <div className='lg:w-1/2 md:w-1/2 sm:w-full bg-white p-4 shadowtable space-y-4 rounded-lg'>

            <div className='flex items-center justify-center p-4'>
                <div className='w-40 h-40 rounded-full bg-blue-50 flex items-center justify-center ring-1 ring-blue-500'>
                    <i className='fa fa-user-o fa-5x'></i>
                </div>
            </div>

                {/* input first name and last name fields */}
                <div className='flex items-center gap-4 justify-betweeen w-full'>
                    <label htmlFor="firstName" className='w-full'>
                        <p className='font-semibold text-xsm'>First Name</p>
                        <input type="text" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter your First Name'/>
                    </label>

                    <label htmlFor="lasttName" className='w-full'>
                        <p className='font-semibold text-xsm'>Last Name</p>
                        <input type="text" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter your Last Name'/>
                    </label>
                </div>

                {/* Email Password Field */}
                <div className='flex items-center gap-4 justify-betweeen w-full'>
                    <label htmlFor="MobileContactNumber" className='w-full'>
                        <p className='font-semibold text-xsm'>Mobile Number</p>
                        <input type="number" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter Email'/>
                    </label>

                    <label htmlFor="password" className='w-full'>
                        <p className='font-semibold text-xsm'>Email</p>
                        <input type="Email" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter Password'/>
                    </label>
                </div>

                <button className='bg-blue-400 rounded text-white text-center font-semibold text-sm w-full p-2'>Update</button>


        </div>
    </div>
  )
}

export default Account