import React, { useState } from 'react'

const Hospital = () => {
    const dummyArray = Array(5).fill(1)
    const [showEditPopup,setShowEditPopup] = useState(false)
    const [addHopsitalPopup,setaddHopsitalPopup] = useState(false)

  return (
    <>
    <div className='flex flex-col items-center bg-blue-50/50 justify-center p-20'>
        <div className='space-y-2'>
        <div className='flex items-center justify-between'>
            <p className='font-bold text-lg'>Hospitals</p>

            {/* Add Hospital Button */}
            <div className='z-50'>
            <button onClick={()=>{setaddHopsitalPopup(true)}} className='font-semibold px-6 py-2 bg-blue-300 rounded text-xsm text-white'>Add Hospital</button>
            
            </div>

        </div>


        <div className="relative shadowtable overflow-x-auto  sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 capitalize">Id</th>
                <th scope="col" className="pr-80 py-3 capitalize">Hospitals</th>
                <th scope="col" className="px-6 py-3 capitalize">Edit</th>
                <th scope="col" className="px-6 py-3 capitalize">Delete</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">6265</td>
                    <td className="pr-80 py-4">rishi@gmail.com</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-4 items-center ">
                        <i onClick={()=>{setShowEditPopup(!showEditPopup)}} className="cursor-pointer fa fa-pencil-square-o inline-block p-2 rounded-full bg-blue-100"></i>
                      </div>
                    </td>
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
            <i className="bg-white p-1 fa fa-angle-double-left" aria-hidden="true"></i>
            <button className='text-slate-400 p-1 text-xsm bg-white text-light'>Previous</button>
            <button className='text-slate-400 p-1 text-xsm bg-white text-light'>Next</button>
            <i className="bg-white p-1 fa fa-angle-double-right" aria-hidden="true"></i>
            </div>
        </div>

        </div>
    </div>

    {/* edit hospital model  */}
    <div className={`w-full max-h-screen bg-black bg-black/10 fixed top-0 z-[100] bottom-0 right-0 flex items-center justify-center duration-500 ${showEditPopup ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className='p-4 bg-teal-50 space-y-4 flex flex-col items-center rounded shadow-lg'>
        <p className='font-semibold text-xsm'>Edit Hospital</p>
        <input type="text" className='ring-1 ring-black/5 p-2 focus:outline-none outline-none' />
        <span className='w-full flex gap-2 items-center justify-between'>
        <button onClick={()=>{setShowEditPopup(false)}} className='w-full bg-white text-xsm font-semibold rounded ring-1 ring-black/5 p-2'>Cancel</button>
        <button className='w-full text-xsm font-semibold rounded ring-1 ring-black/5 p-2 bg-blue-300 text-white'>Edit Hospital</button>
        </span>
      </div>
    </div>

    {/* add hospital model  */}
    <div className={`w-full max-h-screen bg-black bg-black/10 fixed top-0 z-[100] bottom-0 right-0 flex items-center justify-center duration-500 ${addHopsitalPopup ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className='p-4 bg-teal-50 space-y-4 flex flex-col items-center rounded shadow-lg'>
        <p className='font-semibold text-xsm'>Add Hospital</p>
        <input type="text" className='ring-1 ring-black/5 p-2 focus:outline-none outline-none' />
        <span className='w-full flex gap-2 items-center justify-between'>
        <button onClick={()=>{setaddHopsitalPopup(false)}} className='w-full bg-white text-xsm font-semibold rounded ring-1 ring-black/5 p-2'>Cancel</button>
        <button className='w-full text-xsm font-semibold rounded ring-1 ring-black/5 p-2 bg-blue-300 text-white'>Edit Hospital</button>
        </span>
      </div>
    </div>
    </>
  )
}

export default Hospital;