import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router';
import { FavoritesContext } from '../context/FavContext';

function Navbar() {
  let { favorites } = useContext(FavoritesContext)
  return (
    <div className='Navbar'>
      <div className="container">
        <div className="logo">
          <h1>Shoppers</h1>
        </div>
        <div className="list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li><NavLink to={"/add"} style={{ color: "black" }}>Add</NavLink></li>
            <li><NavLink to={"/favorites"} style={{ color: "black" }} >Wishlist({favorites.length})</NavLink></li>
          </ul>
          <div className="icon">
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
