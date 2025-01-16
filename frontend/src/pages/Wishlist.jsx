import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavContext'
import { NavLink } from 'react-router'
import { FaInfoCircle } from 'react-icons/fa'
import { FcDislike } from 'react-icons/fc'
import { useDeleteDataMutation, useGetDataQuery } from '../App/Slices/slice'
import { Helmet } from 'react-helmet'

function Wishlist() {
  let { favorites, setFavorites } = useContext(FavoritesContext)
  let [deleteData] = useDeleteDataMutation()
  let { isLoading } = useGetDataQuery()


  function handleDelete(item) {
    let filter = favorites.filter((data) => data._id !== item)
    setFavorites(filter)
  }
  return (
    <>
    <Helmet>
       <link rel="icon" type="image/svg+xml" href="https://is.gd/7HV947" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wishlist</title>
       </Helmet>
      <div className='Wishlist'>
        <h1>Wishlisht</h1>
        <div className="card-wrapper">

          {
            isLoading ? (
              <h1>...IsLoading</h1>
            ) : (
              favorites.length != 0 ? (
                favorites.map((item) => (
                  <div className="card">
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                    <span>${item.price}</span>
                    <div className="btns">
                      <button><NavLink to={`/${item._id}`} style={{ color: "black" }}><FaInfoCircle /></NavLink></button>
                      <button onClick={() => handleDelete(item._id)}><FcDislike /></button>
                    </div>
                  </div>
                ))
              ) : (
                <button style={{padding:"10px",fontSize:"20px"}}> <NavLink to={"/"} style={{color:"black"}}> Go Back</NavLink></button>
              )
            )
          }
        </div>
      </div>
    </>
  )
}

export default Wishlist
