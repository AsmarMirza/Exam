import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import "./add.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Add() {
    const [products, setProducts] = useState([])
    const [inp, setInp] = useState("")
    useEffect(() => {
     getAllProducts()
    }, [])
    

    async function getAllProducts(){
        const res=await fetch("http://localhost:3000/products/")
        const data=await res.json()
        setProducts(data)
    }
    async function deleteProduct(id){
        const res=await fetch("http://localhost:3000/products/"+id,{method:"delete"})
        const data=await res.json()
       await getAllProducts()
    }

    async function addProduct(values){
        const res=await fetch("http://localhost:3000/products/",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(values)
        })
        const data=await res.json()
       await getAllProducts()
    }

    function asc(value){
        setProducts(products.toSorted((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0)))
    }
    function dsc(value){
        setProducts(products.toSorted((a,b) => (a[value] < b[value]) ? 1 : ((b[value] < a[value]) ? -1 : 0)))
    }
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"40px",alignItems:"center" ,padding:"100px"}}>
          <Helmet>
        <title>Add</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
<div>

<input type="text" name="" id=""  placeholder='search..'
value={inp}
onChange={(e)=>{setInp(e.target.value)}}
/>

<button onClick={()=>asc("name")}>A-Z</button>
<button onClick={()=>dsc("name")}>Z-A</button>
<button onClick={()=>asc("price")}>asc</button>
<button onClick={()=>dsc("price")}>dsc</button>
</div>
      <Formik
       initialValues={{ image: '', name: '', price: '' }}
       validationSchema={Yup.object({
         image: Yup.string()
          
           .required('Required'),
         name: Yup.string()
         
           .required('Required'),
         price: Yup.number().required('Required'),
       })}
       onSubmit={(values, { resetForm }) => {
        addProduct(values)
       resetForm()
       }}
     >
       <Form>
         <label htmlFor="image">Image</label><br />
         <Field name="image" type="text" /><br />
         <ErrorMessage name="image" />
 
         <label htmlFor="name">Name</label><br />
         <Field name="name" type="text" /><br />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">Price</label><br />
         <Field name="price" type="number" /><br />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
      <table>
        <thead>
  <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Price</th>
    <th>Options</th>
    
  </tr>
    </thead>
    <tbody>
        {products
        .filter((x)=>x.name.toLowerCase().includes(inp.toLowerCase()))
        .map((x)=>(
              <tr key={x._id}>
              <td><img style={{width:"100px"}} src={x.image} alt="" /></td>
              <td>{x.name}</td>
              <td>{x.price}</td>
              <td><button onClick={()=>deleteProduct(x._id)}>delete</button></td>
            </tr>
        ))}
    </tbody>
 </table>
    </div>
  )
}

export default Add