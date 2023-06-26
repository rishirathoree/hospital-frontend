import React, { useState } from 'react'

const Professionals = () => {
  const userDetailArray = [
    {
      ID: 1,
      USER_NAME: "John Doe",
      USER_TYPE: "Doctor",
      EMAIL_ID: "johndoe@example.com",
      MOBILE_NUMBER: "1234567890",
      REGISTRATION_NUMBER: "DOC12345"
    },
    {
      ID: 2,
      USER_NAME: "Jane Smith",
      USER_TYPE: "Dentist",
      EMAIL_ID: "janesmith@example.com",
      MOBILE_NUMBER: "9876543210",
      REGISTRATION_NUMBER: "DEN54321"
    },
    {
      ID: 3,
      USER_NAME: "Michael Johnson",
      USER_TYPE: "Label Technician",
      EMAIL_ID: "michaeljohnson@example.com",
      MOBILE_NUMBER: "7890123456",
      REGISTRATION_NUMBER: "LT78901"
    },
    {
      ID: 4,
      USER_NAME: "Emily Davis",
      USER_TYPE: "Patient",
      EMAIL_ID: "emilydavis@example.com",
      MOBILE_NUMBER: "5432167890",
      REGISTRATION_NUMBER: "PAT54321"
    },
    {
      ID: 5,
      USER_NAME: "Robert Wilson",
      USER_TYPE: "Doctor",
      EMAIL_ID: "robertwilson@example.com",
      MOBILE_NUMBER: "0123456789",
      REGISTRATION_NUMBER: "DOC67890"
    },
    {
      ID: 6,
      USER_NAME: "Jennifer Brown",
      USER_TYPE: "Dentist",
      EMAIL_ID: "jenniferbrown@example.com",
      MOBILE_NUMBER: "6789012345",
      REGISTRATION_NUMBER: "DEN01234"
    },
    {
      ID: 7,
      USER_NAME: "David Lee",
      USER_TYPE: "Label Technician",
      EMAIL_ID: "davidlee@example.com",
      MOBILE_NUMBER: "4567890123",
      REGISTRATION_NUMBER: "LT45678"
    },
    {
      ID: 8,
      USER_NAME: "Sarah Miller",
      USER_TYPE: "Patient",
      EMAIL_ID: "sarahmiller@example.com",
      MOBILE_NUMBER: "9012345678",
      REGISTRATION_NUMBER: "PAT90123"
    },
    {
      ID: 9,
      USER_NAME: "William Thompson",
      USER_TYPE: "Doctor",
      EMAIL_ID: "williamthompson@example.com",
      MOBILE_NUMBER: "3456789012",
      REGISTRATION_NUMBER: "DOC23456"
    },
    {
      ID: 10,
      USER_NAME: "Olivia Wilson",
      USER_TYPE: "Patient",
      EMAIL_ID: "oliviawilson@example.com",
      MOBILE_NUMBER: "5678901234",
      REGISTRATION_NUMBER: "PAT56789"
    }
  ];
  
    const [showSelectDropdown,setShowSelectDropdown] = useState(false)
    const [selectOptionValue,setSelectOptionValue] = useState('All')
    const selectOption = ['All','Dentist','Pharmasist','Label Technician','Patient']
     
    const filterBasedOnSelectedValue = selectOptionValue !== 'All' ? userDetailArray.filter(item => item.USER_TYPE === selectOptionValue) : userDetailArray  
    console.log(filterBasedOnSelectedValue)
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
              <div className={`${showSelectDropdown ? 'visible opacity-100' : 'invisible opacity-0'} duration-100 z-[1000] absolute shadow-lg top-10 right-0 bg-white`}>
                <ul>
                  {selectOption.map((item,index)=>{
                    return(
                      <li onClick={()=>{setSelectOptionValue(item)}} key={index}><p className='font-medium text-black pl-4 pr-12 text-left py-3 text-xsm hover:bg-gray-50'>{item}</p></li>
                    )
                  })}
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
              {filterBasedOnSelectedValue.map((item, index) => {
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
        <div className='flex z-[10] items-center justify-between'>
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