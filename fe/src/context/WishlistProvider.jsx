import React, { createContext, useState } from 'react'
import useLocalStorage from '../hook/useLocalStorage'


export const WishlistContext=createContext()
function WishlistProvider({children}) {
const [wishlist, setWishlist] = useLocalStorage("wishlist",[])
    function addWishlist(item){
        const index=wishlist.findIndex((x)=>x._id===item._id)
        if (index!==-1) {
            setWishlist(wishlist.filter((x)=>x._id!==item._id))
        }
        else{
            setWishlist([...wishlist,item])
        }
    }

    function isExist(item){
        return wishlist.findIndex((x)=>x._id===item._id)!==-1
    }
  return (
   <WishlistContext.Provider value={{isExist,addWishlist,wishlist}}>
    {children}
   </WishlistContext.Provider>
  )
}

export default WishlistProvider