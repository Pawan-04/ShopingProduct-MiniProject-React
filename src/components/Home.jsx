import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import { useContext } from 'react'

function Home() {

  const [product] = useContext(ProductContext)
  console.log(product ? product : "Loading..")
  return product ? (
    
    <>
    <Navbar/>

    
    <div className=" py-10 px-8 w-[80%] h-screen flex flex-wrap gap-10 overflow-x-hidden">

      {product.map((p,i)=>(

        <Link key={i} to={`/details/${p.id}`}
        className=" w-[30%] h-[50%] rounded-md flex flex-col items-center gap-3 shadow hover:scale-105 transition delay-150 duration-300 ease-in-out px-5 overflow-y-hidden" >
          <img src={p.image} className ="object-contain w-full h-[75%]"/>
          <p className="hover:text-blue-300">{p.title}</p>
        </Link>

      ))
      }
        
    
    
    </div>
    </>
    
  ) :
  (<Loading/>)
}

export default Home
