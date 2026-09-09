import React from 'react'

const getProduct = async(id)=>{
    const res= await fetch(`https://dummyjson.com/products/${id}`)
    return res.json()
} 

export const preload=(id)=>{
    void getProduct(id)
}

const Product = async({id}) => { 
    const product = await getProduct(id)  
    console.log(product)
   return (
    <div>
      <h1>Name:{product.title}</h1>
      <h1>Price:{product.price}</h1>
    </div>
  )
}

export default Product
