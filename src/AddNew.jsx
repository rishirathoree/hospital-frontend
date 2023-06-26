import React from 'react'

const AddNew = () => {
  return (
    <div className='flex flex-col items-center   h-full bg-blue-50/50 justify-center lg:p-20 md:p-20 sm:p-4'>
        <div className='lg:w-1/2 md:w-full sm:w-full bg-white p-4 shadowtable space-y-4 rounded-lg'>
            <p className='font-semibold text-lg'>Register</p>

            <div className='flex items-center justify-center p-4'>
                <div className='w-40 h-40 rounded-full bg-blue-50 flex items-center justify-center ring-1 ring-blue-500'>
                    <i className='fa fa-user-o fa-5x'></i>
                </div>
            </div>

                <div>
                    <p className='font-semibold text-xsm mb-2'>Select your type</p>
                    <ul className='flex items-center lg:flex-row md:flex-col sm:flex-col justify-between gap-4'>
                        <li className='ring-1 ring-black/5 rounded-full w-full text-center p-2'><p className='font-light text-xsm'>Doctor</p></li>
                        <li className='ring-1 ring-black/5 rounded-full w-full text-center p-2'><p className='font-light text-xsm'>Patient</p></li>
                        <li className='ring-1 ring-black/5 rounded-full w-full text-center p-2'><p className='font-light text-xsm'>Lab Technician</p></li>
                        <li className='ring-1 ring-black/5 rounded-full w-full text-center p-2'><p className='font-light text-xsm'>Dentist</p></li>
                    </ul>
                </div>

                {/* input first name and last name fields */}
                <div className='flex items-center gap-4 justify-betweeen w-full'>
                    <label htmlFor="firstName" className='w-full'>
                        <p className='font-semibold text-xsm'>First Name</p>
                        <input type="text" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter your First Name'/>
                    </label>

                    <label htmlFor="firstName" className='w-full'>
                        <p className='font-semibold text-xsm'>First Name</p>
                        <input type="text" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter your First Name'/>
                    </label>
                </div>

                {/* Select Genders */}
                <div>
                    <p className='font-semibold text-xsm mb-2'>Select your type</p>
                    <ul className='flex items-center justify-between gap-4'>
                        <li className='ring-1 ring-black/5 rounded-full w-full text-center p-2'><p className='font-light text-xsm'>Male</p></li>
                        <li className='ring-1 ring-black/5 rounded-full w-full text-center p-2'><p className='font-light text-xsm'>Female</p></li>
                        <li className='ring-1 ring-black/5 rounded-full w-full text-center p-2'><p className='font-light text-xsm'>Others</p></li>
                    </ul>
                </div>

                {/* Date of birth */}
                <div className='flex items-center gap-4 justify-betweeen w-full'>
                    <label htmlFor="dob" className='w-full'>
                        <p className='font-semibold text-xsm'>Date of Birth</p>
                        <input type="text" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter DOB'/>
                    </label>

                    <label htmlFor="numbercontact" className='w-full'>
                        <p className='font-semibold text-xsm'>Number</p>
                        <input type="number" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter Number'/>
                    </label>
                </div>

                {/* Email Password Field */}
                <div className='flex items-center gap-4 justify-betweeen w-full'>
                    <label htmlFor="email" className='w-full'>
                        <p className='font-semibold text-xsm'>Email</p>
                        <input type="text" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter Email'/>
                    </label>

                    <label htmlFor="password" className='w-full'>
                        <p className='font-semibold text-xsm'>Password</p>
                        <input type="password" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter Password'/>
                    </label>
                </div>

                {/* Address Field */}
                <div className='flex items-center gap-4 justify-betweeen w-full'>
                    <label htmlFor="dob" className='w-full'>
                        <p className='font-semibold text-xsm'>Address</p>
                        <input type="text" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter DOB'/>
                    </label>
                </div>

                {/* input first name and last name fields */}
                <div className='flex items-center gap-4 justify-betweeen w-full'>
                    <label htmlFor="docType" className='w-full'>
                        <p className='font-semibold text-xsm'>Document Type</p>
                        <select type="text" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter your First Name'>
                            <option value="PDF">PDF</option>
                        </select>
                    </label>

                    <label htmlFor="pibNumber" className='w-full'>
                        <p className='font-semibold text-xsm'>PIB Nmber</p>
                        <input type="text" className='p-3 rounded ring-1 ring-black/5 w-full focus:outline-none outline-none text-xsm font-light' placeholder='Enter your First Name'/>
                    </label>
                </div>

                {/* Document Upload Box */}
                
                <div className="flex items-start flex-col justify-center w-1/2">
                    <p className='font-semibold mb-2 text-xsm'>Document Upload</p>
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full py-12 border-2 border-blue-500 border-dashed rounded-lg cursor-pointer bg-blue-50  hover:bg-blue-50">
                <div className="flex flex-col items-center justify-center ">
                <i class="fa fa-file-image-o text-blue-500 fa-2x" aria-hidden="true"></i>
                <p className="text-sm text-blue-500 ">Choose Picture</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
                </label>
                </div> 

                <button className='bg-blue-400 rounded text-white text-center font-semibold text-sm w-full p-2'>Register</button>


        </div>
    </div>
  )
}

export default AddNew