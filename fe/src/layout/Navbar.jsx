import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="" />
        </div>
        <ul className='navUl'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/add"}>Add</Link></li>
            <li><Link to={"/basket"}>Basket</Link></li>
            <li><Link to={"/wishlist"}>Wishlist</Link></li>
        </ul>
        <div className='navIcon'>
        <i className="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default Navbar