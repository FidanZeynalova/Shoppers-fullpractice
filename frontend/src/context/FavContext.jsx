import React, { createContext, useEffect, useState } from 'react'

export const FavoritesContext = createContext()

function FavContextProvider({ children }) {
    let local = JSON.parse(localStorage.getItem("favorites"))
    let [favorites, setFavorites] = useState(local ? local : [])

useEffect(()=>{
    
    localStorage.setItem("favorites", JSON.stringify(favorites))
},[favorites])

    const value = {
        favorites, setFavorites
    }
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavContextProvider
