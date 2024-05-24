import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../context/WishlistProvider'

function Wishlist() {
    const {addWishlist,wishlist}=useContext(WishlistContext)
  return (
    <div style={{padding:"100px"}}>
          <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div style={{display:"flex",flexWrap:"wrap",gap:"30px"}}>
{wishlist.map((x)=>(
    <div key={x._id} style={{width:"300px",border:"1px solid black" }}>
<img src={x.image} alt="" />
<h1>{x.name}</h1>
<p>{x.price}$</p>

<button onClick={()=>addWishlist(x)}>remove wishlist</button>
    </div>
))}
    </div>
    </div>
  )
}

export default Wishlist