import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()


function Context(props) {

    const [product,setProduct] = useState(null)
    
    const getProducts = async() =>{
      try{
        const productData = await axios('/products')
        // console.log(productData.data)
        setProduct(productData.data)
      }
      catch(err){
        console.log("Error in axios",err)
      }
    }
    useEffect(()=>{
      getProducts()

    },[])

  return (
    <div>
     <ProductContext.Provider value = {[product,setProduct]}>   {props.children}  </ProductContext.Provider>
    </div>
  )
}

export default Context;
