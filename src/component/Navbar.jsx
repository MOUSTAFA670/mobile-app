import React from 'react'

import Group from "../Home/Group.svg"
import icon1 from "../Home/search-normal.svg"
import icon2 from "../Home/vuesax-linear-profile.svg"
import icon3 from "../Home/vuesax-linear-bag-2.svg"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
   <>
   
   <nav className="navbar navbar-expand-lg navbar-dark   bg-dark">
  <div className="container">
    <div className='logo'>

    <Link className="navbar-brand" to="home"><img src={Group} alt="" /></Link> 
    </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" ms-5 collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Mac</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">ipad</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">iphone</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Watch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">TV</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Accessories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Offers</a>
        </li>
    
      </ul>
      <ul className=" nav-border   navbar-nav ms-lg-4  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Services</a>
        </li>
   
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Locations</a>
        </li>
   
      </ul>
      <ul className="   navbar-nav ms-auto pe-5 mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active media
media" href="#"><img className='w-75  ' src={icon1} alt="" /></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active media
media" href="#"><img className='w-75 ' src={icon2} alt="" /></a>
        </li>
   
        <li className="nav-item">
        <a className="nav-link active media
media" href="#"><img className='w-75 ' src={icon3} alt="" /></a>
        </li>
   
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar