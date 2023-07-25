import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
const Professionals = () => {
  const [professionals,setProfessionals ] = useState(null)
    const inputRef = useRef(null)
  const dummy = Array(10).fill(1)
    const focusInput = () => {inputRef.current && inputRef.current.focus()}
    const [showSelectDropdown,setShowSelectDropdown] = useState(false)
    const [selectOptionValue,setSelectOptionValue] = useState('All')
    const selectOption = ['All','Dentist','Pharmasist','Label Technician','Patient']
     
    const filterBasedOnSelectedValue = selectOptionValue !== 'All' ? professionals && professionals.filter(item => item.USER_TYPE === selectOptionValue) : professionals  

    useEffect(()=>{
      getProfessionals()
    },[])
    const getProfessionals = async () => {
      try {
        const data = await axios.get('http://donka-node.codemeg.com/user/get-all-unapproved-user')
        console.log(data)
        setProfessionals(data.data.data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    

  return (
    <div className={`flex flex-col items-center bg-blue-50/50 justify-start  ${professionals && professionals.length <= 0 ? 'h-full ' : 'h-screen'} bg-blue-50/50 justify-start lg:p-20 md:p-12 sm:p-4 lg:p-20 md:p-12 sm:p-4`}>
        <div className='space-y-2 lg:w-max md:w-full sm:w-full'>
        <div className='flex items-center justify-between'>
            <p className='font-bold text-lg'>Professional</p>

            <div className='flex items-center gap-2'>
            {/* Select based on type */}
            <div className='relative z-50'>
              <div onClick={()=>{setShowSelectDropdown(!showSelectDropdown)}} className='flex gap-16 items-center bg-white p-2 z-50'>
                <p className='font-medium text-xsm'>Select</p>
              <i  className={`fa fa-angle-down duration-300 ${showSelectDropdown ? 'rotate-180' : ''}`} aria-hidden="true"></i>
              </div>
              <div className={`${showSelectDropdown ? 'visible opacity-100' : 'invisible opacity-0'} duration-100 z-[99999] absolute shadow-lg top-10 right-0 bg-white`}>
                <ul>
                  {selectOption.map((item,index)=>{
                    return(
                      <li onClick={()=>{setSelectOptionValue(item) ; setShowSelectDropdown(false)}} key={index}><p className='font-medium text-black pl-4 pr-12 text-left py-3 text-xsm hover:bg-gray-50'>{item}</p></li>
                    )
                  })}
                </ul>
              </div>
            </div>


            {/* Search Input */}
            <div className='bg-white flex items-center gap-2 p-2 z-50 rounded-lg'>
            <i onClick={focusInput} className='fa bg-transparent text-blue-300 fa-search'></i>
            <input ref={inputRef} type="text" placeholder='Search..' className='text-xsm font-lighter focus:outline-none outline-none bg-transparent' />
            </div>
            </div>
        </div>
        <div className="relative shadowtable overflow-x-auto  sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 capitalize">Id</th>
                <th scope="col" className="px-6 py-3 capitalize">User Name</th>
                <th scope="col" className="px-6 py-3 capitalize">User Type</th>
                <th scope="col" className="px-6 py-3 capitalize">Email Id</th>
                <th scope="col" className="px-6 py-3 capitalize">Mobile Number</th>
                <th scope="col" className="px-6 py-3 capitalize">Registration Number</th>
                <th scope="col" className="px-6 py-3 capitalize">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummy && dummy.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4 ">465123</td>
                      <td className="px-6 py-4 ">John Adam</td>
                      <td className="px-6 py-4 ">Patient</td>
                      <td className="px-6 py-4 ">rishi3@gmail.com</td>
                      <td className="px-6 py-4 ">6135496834529</td>
                      <td className="px-6 py-4 ">7746</td>
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
        <div className='flex items-center justify-between'>
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
  )
}

export default Professionals;
