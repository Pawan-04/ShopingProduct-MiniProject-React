import React from 'react'

function App() {
  return (
    <div className="flex">
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

      <div className=" py-10 px-8 w-[80%] h-screen flex flex-wrap gap-15">
        <div className=" w-[25%] h-[50%] rounded-md flex flex-col items-center shadow-md hover:scale-105 transition delay-150 duration-300 ease-in-out">
          <img className="w-full h-[80%] overflow-hidden p-2 rounded-md" src="https://plus.unsplash.com/premium_photo-1677995700947-4b92cb1bba76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcGluZyUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D"/>
          <p className="hover:text-blue-300">Lorem ipsum dolor sit amet.</p>
        </div>
     
    
     </div>
    </div>
  )
}

export default App
