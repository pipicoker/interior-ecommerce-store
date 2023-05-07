import React, { useContext, useState } from 'react'
import { filterByCategoryContext } from '../App'

const DropdownFilter = () => {
    const filterByCategory = useContext(filterByCategoryContext)

    const [active, setActive] = useState(false)

    const toggleDropdown = () => {
        setActive(!active)
    }

    // const test = () => {
    //     console.log("hello babay");
        
    // }


    return (
        
    
      
        <div className="inline-flex bg-white border rounded-md">
            <div
                
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
            >
                Sort By
            </div>

            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                <div className={active ? "absolute  right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg" : "hidden"  }>
                    <div className="p-2">
                        <div
                            onClick={() => filterByCategory('table') }
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Tables
                        </div>
                        <div
                            onClick={() => filterByCategory('sofa') }
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Sofa
                        </div>
                        <div
                            onClick={() => filterByCategory('chair') }
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Chairs
                        </div>
                        <div
                            onClick={() => filterByCategory('stool') }
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Stools
                        </div>
                        <div
                            onClick={() => filterByCategory('bed') }
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Bed
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DropdownFilter
