import React, { useContext } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { FcLike } from "react-icons/fc";
import { NavLink } from "react-router"
import { useDeleteDataMutation, useGetDataQuery } from '../App/Slices/slice';
import { FavoritesContext } from '../context/FavContext';
function Products() {
    let { data, isLoading, refetch } = useGetDataQuery()
    let { favorites, setFavorites } = useContext(FavoritesContext)


  
    function handleFav(item) {
        let filter = favorites.find((fav) => fav._id == item._id)

        if (filter) {
            alert("Zaten daha once elave olunub")
        } else {
            setFavorites([...favorites, item])
        }
    }
    return (
        <div className='Products'>
            <div className="container">
                <h1>Featured Products</h1>
                <div className="card-wrapper">
                    {
                        isLoading ? (
                            <h1>...IsLoading</h1>
                        ) : (
                            data.map((item) => (
                                <div className="card">
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    <span>${item.price}</span>
                                    <div className="btns">
                                        <button><NavLink to={`/${item._id}`} style={{ color: "black" }}><FaInfoCircle /></NavLink></button>
                                        <button onClick={() => handleFav(item)}><FcLike /></button>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
