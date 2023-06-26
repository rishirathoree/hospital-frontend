import React, { useState } from 'react'

const Notification = () => {
    const dummyArray = Array(5).fill(1)
  return (
    <div className='flex flex-col items-center bg-blue-50/50 justify-center lg:p-20 md:p-12 sm:p-4'>
        <div className='space-y-2 lg:w-2/3 md:w-full sm:w-full'>
        <div className='flex items-center justify-between'>
            <p className='font-bold text-lg'>Notifications</p>

        </div>


        <div className="relative shadowtable overflow-x-auto sm:rounded-lg w-full">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 d">
              <tr className='w-full'>
                <th scope="col" className="px-6 py-3 capitalize">Id</th>
                <th scope="col" className="px-6 py-3 capitalize">Notifications</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 min-w">6265</td>
                    <td className="px-6 py-4 w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque et assumenda quaerat nemo qui placeat fuga libero, sed unde illo ut architecto magnam distinctio praesentium officiis? Repellendus ab inventore praesentium aliquid, aliquam eaque eum sunt blanditiis ipsa repudiandae nam pariatur debitis nemo cum!</td>
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

export default Notification;