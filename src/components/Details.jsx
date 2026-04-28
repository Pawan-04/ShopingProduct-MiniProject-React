import { NavLink, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import { useEffect, useState } from 'react'
import axios from '../utils/axios'
import Loading from './Loading'


function Details() {

  const {id} = useParams()
  console.log(id)
  const [singleProduct,setSingle] = useState(null)

  const getSingleProduct = async() => {
    try{
    const item = await axios(`/products/${id}`) 
    console.log(item)
    setSingle(item.data)
    }
    catch(err){
      console.log("details.jsx error")
    }
  }

  useEffect(()=>{
    getSingleProduct()
  },[])


  return singleProduct ? (

    <div className="h-screen w-full p-4 flex items-center justify-center gap-10 px-[10%]">
    <div className="h-[70%] w-[40%] rounded-md overflow-hidden ">
      <img src="w-full h-[80%] overflow-hidden p-2 rounded-md" src={singleProduct.image} className='object-contain w-full h-full '/> 
    </div>
      <div className='flex flex-col gap-4 w-[60%]'>
        <h1 className='text-4xl '>{singleProduct.title} 
        </h1>
        <p className='text-gray-500 text-none'>{singleProduct.description}</p>
        <p className="text-red-300">{singleProduct.price}</p>
        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tenetur exercitationem a vero optio error quam facilis iste, suscipit eos.</p>
        <div className='flex gap-10'>
            <NavLink className="  border-2  py-2 px-10 border-sky-200 text-sky-200 text-3xl rounded shadow hover:scale-102">Edit</NavLink>
        <NavLink className="border-2  py-2 px-8 border-red-200 text-red-200 text-3xl  rounded shadow hover:scale-102">Delete</NavLink>
         </div>
        
      </div>
    </div>
    
  ):
  <Loading/>
}

export default Details
