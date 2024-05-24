import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

function Detail() {
const {id}=useParams()
  
    const [products, setProducts] = useState([])
    useEffect(() => {
     getProduct()
    }, [])
    

    async function getProduct(){
        const res=await fetch("http://localhost:3000/products/"+id)
        const data=await res.json()
        setProducts(data)
    }
  return (
    <div style={{padding:"100px",alignItems:"center",display:"flex",justifyContent:"center"}}>
          <Helmet>
        <title>Detail</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

    <div  style={{width:"300px",border:"1px solid black",textAlign:"center" }}>
     
<img src={products.image} alt="" />
<h1>{products.name}</h1>
<p>{products.price}$</p>

    </div>
    </div>
  )
}

export default Detail