import React from 'react'
import Home from './Home'
import Service from './service'
import Contact from './Contact'
// import PageNotFound from './PageNotFound'
// import BiKeService from './BiKeService'
import {BrowserRouter, Route, Routes,Link} from"react-router-dom";
import PageNotFound from './PageNotFound';





export default function Router() {
  return (
    <>
    <BrowserRouter> 
     <NavBar/>
    {/* <ul>
        <li><Link to={"/ home "}className=' w-100 bg-dark rounded-1  text-danger  '> !! Home !! </Link></li>
    
        <li><Link to={"/service"} className='w-100 bg-dark rounded-1  text-danger' >  !! service  !!</Link></li>
        
        <li><Link to={"/contact"} className='w-100 bg-dark rounded-1  text-danger' > !! contact  !!</Link></li>
    </ul> */}
   <Routes>
    <Route  path="/home" element={<Home/>}/>

    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' Component={PageNotFound}/>
   

   </Routes>

    {/* <Home/> */}
    {/* <Service/> */}
    {/* <Contact/> */}
    </BrowserRouter>
    </>
  )
}
