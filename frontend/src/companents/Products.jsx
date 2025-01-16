import React, { useContext, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { FcLike } from "react-icons/fc";
import { NavLink } from "react-router"
import { useDeleteDataMutation, useGetDataQuery } from '../App/Slices/slice';
import { FavoritesContext } from '../context/FavContext';
function Products() {
    let { data, isLoading, refetch } = useGetDataQuery()
    let { favorites, setFavorites } = useContext(FavoritesContext)
    let [allData, setAllData] = useState([])


    function handleFav(item) {
        let filter = favorites.find((fav) => fav._id == item._id)

        if (filter) {
            alert("Zaten daha once elave olunub")
        } else {
            setFavorites([...favorites, item])
        }
    }
    function handleSearch(inpValue) {
        if (inpValue.trim().toLowerCase() == '') {
            setAllData([...data])
        } else {
            let find = allData.filter((item) => item.name.toLowerCase().includes(inpValue.trim().toLowerCase()))
            setAllData(find)
        }
    }
    return (
        <div className='Products'>
            <div className="container">
                <h1>Featured Products</h1>
                <div className="sort-search">
                    <div className="search">
                        <input type="text" placeholder='Search ...' onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                    <div className="sort">
                        <select >
                            <option value="default">Default</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                        </select>
                    </div>
                </div>
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
