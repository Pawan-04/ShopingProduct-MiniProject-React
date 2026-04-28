import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import { useContext } from 'react'
import axios from '../utils/axios'


function Home() {

  const [product] = useContext(ProductContext)
  // setFilterProduct(product)
  // console.log(product ? product : "Loading..")
  const { search } = useLocation()
  const category = decodeURIComponent(search.split('=')[1])
  // console.log(category)
  const [filterProduct, setFilterProduct] = useState(null)

  const getCategory = async () => {
    try {
      const cat = await axios(`/products/category/${category}`)
      // console.log(cat)
      setFilterProduct(cat.data)
    }
    catch (err) {
      console.log("Facing issue in fetching category")
    }
  }
  // console.log(filterProduct)
  useEffect(() => {
    //console.log(category)
    if (!filterProduct  || category == 'undefined') setFilterProduct(product)
    if (category != 'undefined') getCategory()
  }, [category, product])

  return filterProduct ?
    (

      <>
        <Navbar />


        <div className=" py-18 px-8 w-[80%] h-screen flex flex-wrap gap-10 overflow-x-hidden">

          {filterProduct.map((p, i) => (

            <Link key={i} to={`/details/${p.id}`}
              className=" w-[30%] h-[50%] rounded-md flex flex-col items-center gap-3 shadow hover:scale-105 transition delay-150 duration-300 ease-in-out px-5 overflow-y-hidden" >
              <img src={p.image} className="object-contain w-full h-[75%]" />
              <p className="hover:text-blue-300">{p.title}</p>
            </Link>

          ))
          }



        </div>
      </>

    ) :
    (<Loading />)
}

export default Home
