import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
const Patients = () => {
    const inputRef = useRef(null)
    const [patient,setPatient] = useState(null)
    console.log(patient)
    useEffect(()=>{
      getPatient()
    },[])
    const getPatient = async () => {
      console.log('first')
      try {
        const data = await axios.get('http://donka-node.codemeg.com/patient/get-all-unapproved-patient')
        console.log(data)
        setPatient(data.data.data)
      } 
      catch (error) {
        console.log(error)
      }
    }
  return (
    <div className={`flex flex-col items-center h-screen bg-blue-50/50 justify-start  ${ patient && patient.length <=  4 ? 'h-full ' : 'h-screen'} lg:p-20 md:p-12 sm:p-4`}>
        <div className='space-y-2 lg:w-4/5 md:w-full sm:w-full'>
        <div className='flex items-center justify-between'>
            <p className='font-bold text-lg'>Patients</p>

            {/* Search Input */}
            <div className='bg-white flex items-center gap-2 p-2 z-50 rounded-lg'>
            <i onClick={()=>{inputRef && inputRef.current.focus()}} className='fa bg-transparent text-blue-300 fa-search'></i>
            <input ref={inputRef} type="text" placeholder='Search..' className='text-xsm font-lighter focus:outline-none outline-none bg-transparent' />
            </div>

        </div>


        <div className="relative shadowtable overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 capitalize">Id</th>
                <th scope="col" className="px-6 py-3 capitalize">Patient Name</th>
                <th scope="col" className="px-6 py-3 capitalize">Email Id</th>
                <th scope="col" className="px-6 py-3 capitalize">Mobile Number</th>
                <th scope="col" className="px-6 py-3 capitalize">Registration Number</th>
                <th scope="col" className="px-6 py-3 capitalize">Delete</th>
              </tr>
            </thead>
            <tbody>
              {patient && patient.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 ">{item.patientId}</td>
                    <td className="px-6 py-4 ">{item.patientName}</td>
                    <td className="px-6 py-4 ">{item.patientEmail}</td>
                    <td className="px-6 py-4 ">{item.patientMobile}</td>
                    <td className="px-6 py-4 ">{`${item.otp}`}</td>
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
  )
}

export default Patients;