import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../context/BasketProvider'

function Basket() {
    const {basket,addBasket,removeBasket,decreaseBasket}=useContext(BasketContext)
  return (
    <div>
          <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <div style={{display:"flex",flexWrap:"wrap",gap:"30px" ,padding:"100px"}}>
{basket.map((x)=>(
    <div key={x._id} style={{width:"300px",border:"1px solid black",textAlign:"center"}}>
<img src={x.image} alt="" />
<h1>{x.name}</h1>
<p>{x.price}$</p>
<p>Count:{x.count}</p>
<button onClick={()=>addBasket(x)}>+ </button>
<button onClick={()=>decreaseBasket(x)}>-</button>
<button onClick={()=>removeBasket(x)}>remove basket</button>
    </div>
))}
    </div>
   </div>
  )
}

export default Basket