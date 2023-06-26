import React, { useState } from 'react'

const Professionals = () => {
    const dummyArray = Array(5).fill(1)
    const [showSelectDropdown,setShowSelectDropdown] = useState(false)
    const selectOption = ['All','Dentist','Pharmasist','Label Technician','Pati']
  return (
    <div className='flex flex-col items-center bg-blue-50/50 justify-center lg:p-20 md:p-12 sm:p-4'>
        <div className='space-y-2 lg:w-max md:w-full sm:w-full'>
        <div className='flex items-center justify-between'>
            <p className='font-semibold text-xsm'>Professional</p>

            

            <div className='flex items-center gap-2'>
            {/* Select based on type */}
            <div className='z-50 relative'>
              <div onClick={()=>{setShowSelectDropdown(!showSelectDropdown)}} className='flex gap-16 items-center bg-white p-2 z-50'>
                <p className='font-medium text-xsm'>Select</p>
              <i class={`fa fa-angle-down duration-300 ${showSelectDropdown ? 'rotate-180' : ''}`} aria-hidden="true"></i>
              </div>
              <div className={`${showSelectDropdown ? 'visible opacity-100' : 'invisible opacity-0'} duration-100 absolute shadow-lg top-10 right-0 bg-white`}>
                <ul>
                  <li><p className='font-medium text-black pl-4 pr-12 text-left py-3 text-xsm hover:bg-gray-50'>All</p></li>
                  <li><p className='font-medium text-black pl-4 pr-12 text-left py-3 text-xsm hover:bg-gray-50'>Doctor</p></li>
                  <li><p className='font-medium text-black pl-4 pr-12 text-left py-3 text-xsm hover:bg-gray-50'>Dentist</p></li>
                  <li><p className='font-medium text-black pl-4 pr-12 text-left py-3 text-xsm hover:bg-gray-50'>Label  Technicial</p></li>
                  <li><p className='font-medium text-black pl-4 pr-12 text-left py-3 text-xsm hover:bg-gray-50'>Patient</p></li>
                </ul>
              </div>
            </div>


            {/* Search Input */}
            <div className='bg-white flex items-center gap-2 p-2 z-50 rounded-lg'>
            <i className='fa bg-transparent text-blue-300 fa-search'></i>
            <input type="text" placeholder='Search..' className='text-xsm font-lighter focus:outline-none outline-none bg-transparent' />
            </div>
            </div>
        </div>
        <div className="relative shadowtable overflow-x-auto  sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Id</th>
                <th scope="col" className="px-6 py-3">User Name</th>
                <th scope="col" className="px-6 py-3">User Type</th>
                <th scope="col" className="px-6 py-3">Email Id</th>
                <th scope="col" className="px-6 py-3">Mobile Number</th>
                <th scope="col" className="px-6 py-3">Registration Number</th>
                <th scope="col" className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 ">6265</td>
                    <td className="px-6 py-4 ">Roman</td>
                    <td className="px-6 py-4 ">Doctor</td>
                    <td className="px-6 py-4 ">rishi@gmail.com</td>
                    <td className="px-6 py-4 ">652542134165</td>
                    <td className="px-6 py-4 ">20-09-2020</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="fa cursor-pointer fa-sm fa-trash inline-block p-2 rounded-full bg-red-100"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className='flex z-50 items-center justify-between'>
            <p className='font-semibold text-xsm text-slate-500'>Showing 1 of 1 Pages</p>
            <div className=' flex items-center gap-1 p-2 z-50 rounded-lg'>
            <p className='font-semibold text-xsm text-slate-500'>Go to Page No</p>
            <input type="text" className='w-8 focus:ring-1 focus:ring-blue-500/50 duration-200 z-50 text-center foucs:outline-none outline-none' />
            <i class="bg-white p-1 fa fa-angle-double-left" aria-hidden="true"></i>
            <button className='text-slate-400 p-1 text-xsm bg-white text-light'>Previous</button>
            <button className='text-slate-400 p-1 text-xsm bg-white text-light'>Next</button>
            <i class="bg-white p-1 fa fa-angle-double-right" aria-hidden="true"></i>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Professionals;