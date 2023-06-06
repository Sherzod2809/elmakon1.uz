import React from 'react'
import '../../css/components/nav.css'
import { string } from '../../commans/string'
import { Link, Outlet } from 'react-router-dom'
export default function nav() {
  return (
    <div className='navdiv1 w-100 bg-info'>
           <div className="navdiv12 w-100 bg-danger h-25 d-flex justify-content-around">
                <div className="navdiv121 w-25 bg-success h-100"> 
                     <ul className='d-flex list-unstyled'>
                        <li className='h-100 w-25 bg-info  d-flex justify-content-center align-items-center'><Link to="/home">{string.nav.menu1}</Link></li>
                        <li className='h-100  bg-warning ms-2 d-flex justify-content-center align-items-center'><Link to="/home1">{string.nav.menu2} </Link></li>
                        <li className='h-100 bg-secondary ms-2 d-flex justify-content-center align-items-center'><a href="/home2"> {string.nav.menu3}</a></li>
                     </ul>   
                </div>
                <div className="navdiv122 w-25 bg-secondary h-100 d-flex justify-content-end">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Rus
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Uz</a></li>
                        <li><a class="dropdown-item" href="#">Eng</a></li>
                    </ul>
                    </div>
                </div>
           </div>
           <div className="navdiv13 w-100 bg-warning h-50"></div>
           <div className="navdiv14 w-100 bg-success h-25"></div>
           <Outlet/>
    </div>
  )
}
