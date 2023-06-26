import React, { useRef } from 'react'

const UnapprovedProfessionals = () => {
    const dummyArray = Array(5).fill(1)
    const inputRef = useRef(null)
    const focusInput = () => {inputRef.current && inputRef.current.focus()}
  return (
    <div className='flex flex-col items-center bg-blue-50/50 justify-center lg:p-20 md:p-12 sm:p-4'>
        <div className='space-y-2 lg:w-3/4 md:w-full sm:w-full'>
        <div className='flex items-center justify-between'>
            <p className='font-bold text-lg'>Unapproved Professional</p>
            <div className='bg-white flex items-center gap-2 p-2 z-50 rounded-lg'>
            <i onClick={focusInput} className='fa bg-transparent text-blue-300 fa-search'></i>
            <input ref={inputRef} type="text" placeholder='Search..' className='text-xsm font-lighter focus:outline-none outline-none bg-transparent' />
            </div>
        </div>
        <div className="relative shadowtable overflow-x-auto  sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 capitalize">Id</th>
                <th scope="col" className="px-6 py-3 capitalize">User Name</th>
                <th scope="col" className="px-6 py-3 capitalize">Type</th>
                <th scope="col" className="px-6 py-3 capitalize">Email Id</th>
                <th scope="col" className="px-6 py-3 capitalize">Mobile Number</th>
                <th scope="col" className="px-6 py-3 capitalize">Status</th>
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
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="fa cursor-pointer fa-sm fa-check inline-block p-2 rounded-full bg-green-100"></i>
                        <i className="fa cursor-pointer fa-sm fa-times inline-block p-2 rounded-full bg-red-100"></i>
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

export default UnapprovedProfessionals;