import React from 'react'
import {Routes,Route, NavLink, useLocation} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'



function App() {
  const {search, pathname} = useLocation()
  return (
    <div className="flex h-screen w-screen">
      {(pathname != '/' || search.length > 0) && (<NavLink to="/" className=" absolute px-5 py-1 left-[23%] top-[3%] border-2 border-red-200 text-xl text-red-300 rounded">Home</NavLink>)}
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>

    </div>
  )
}

export default App
