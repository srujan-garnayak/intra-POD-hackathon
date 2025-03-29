import React from 'react'
import { FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div className="bg-gray-200 min-h-screen p-5 flex">
            <div className="w-64 p-4 bg-gray-900 text-white shadow-lg rounded-lg mr-6">
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-orange-500 rounded-full mr-3"></div>
                    <h1 className="text-xl font-bold text-orange-600">Horizon</h1>
                </div>

                <div className="flex items-center space-x-2 mx-2">

                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        AH
                    </div>
                    <div>
                        <div className="flex items-center ">
                            <span className="text-sm font-semibold mr-2">Adrian Hajdin</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                />
                            </svg>
                        </div>
                        <p className="text-xs text-gray-500">adrian@jsmastery.pro</p>
                    </div>
                </div>

                <nav className="space-y-2 my-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder='Search'
                            className='border-2 mx-3 px-3 py-2 rounded-lg border-gray-400 w-48 pr-10'
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-200 absolute right-10 top-1/2 -translate-y-1/2 hover:text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>

                    <div className='flex items-center p-3 rounded-lg cursor-pointer'>
                        <div className='bg-orange-50 text-orange-600 w-48 p-2 rounded-md flex gap-3'><FaHome className='size-6' /><div>
                            Home
                        </div></div>
                    </div>
                    <div className='flex items-center p-3 -my-3 rounded-lg cursor-pointer'>
                        {/* <div className="w-6 h-6 mr-3 bg-gray-200 rounded-full"></div> */}
                        <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-48 flex gap-3'>
                            <BsBank2 className='size-5.5' />
                            <div>
                                My Bank
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center p-3 -my-3 rounded-lg cursor-pointer'>
                        {/* <div className="w-6 h-6 mr-3 bg-gray-200 rounded-full"></div> */}
                        <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-48 flex gap-3'>
                            <AiOutlineTransaction className='size-6' />
                            <div>
                                Transaction History
                            </div></div>
                    </div>
                    <div className='flex items-center p-3 -my-3 rounded-lg cursor-pointer'>
                        {/* <div className="w-6 h-6 mr-3 bg-gray-200 rounded-full"></div> */}
                        <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-48 flex gap-3'>
                        <FaMoneyBillTransfer className='size-6.5'/> 
                            <div>Payment Transfer</div>
                            </div>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Navbar
