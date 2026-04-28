import React from 'react'

function Navbar() {
  return (
   <>
   <nav className="w-[20%] bg-gray-100 h-screen p-2 flex flex-col gap-5">
        <button className=" bg-white/30 backdrop-sepia-0 block mx-auto border-1 text-2xl text-sky-400 font-bold p-4 rounded-md  shadow-md ">Add To Cart</button>
        <hr className='border-sky-500'/>
        <ul className="px-2 flex flex-col gap-3">
          <h1 className='text-2xl font-bold '>Category Filter</h1>
          <li className="flex items-center gap-1"><span className=" inline-block w-4 h-4 bg-green-300 rounded-full">
            </span >Cart2</li>
          <li className="flex items-center gap-1">
            <span className=" inline-block w-4 h-4 bg-red-300 rounded-full">
              </span>Cart1</li>
          <li className="flex items-center gap-1">
            <span className=" inline-block w-4 h-4 bg-blue-300 rounded-full"></span>Cart3</li>
        </ul>
      </nav>
   </>
  )
}

export default Navbar
