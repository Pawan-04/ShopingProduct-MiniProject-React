import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [product] = useContext(ProductContext);

  const distinct_product = product.reduce((acc,cv) => [...acc,cv.category],[])
  // console.log(distinct_product)
  const unique_category_product = [...new Set(distinct_product)]
  // console.log(unique_category_product)
   const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},0.4)`;
    };

  

  return (
   <>
   <nav className="w-[20%] bg-gray-100 h-screen p-2 flex flex-col gap-5">
        <button className=" bg-white/30 backdrop-sepia-0 block mx-auto border-1 text-2xl text-sky-400 font-bold p-4 rounded-md  shadow-md ">Add To Cart</button>
        <hr className='border-sky-500'/>
        <ul className="px-2 flex flex-col gap-3">
          <h1 className='text-2xl font-bold '>Category Filter</h1>
          {unique_category_product.map((cat,index)=> 
            <NavLink to={`/?category=${cat}`}  key ={index} className="flex items-center gap-1"><span style={{ backgroundColor: color() }} className=" inline-block w-4 h-4 bg-green-300 rounded-full">
            </span >{cat}</NavLink>
          )}
        </ul>
      </nav>
   </>
  )
}

export default Navbar
