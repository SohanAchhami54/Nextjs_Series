import Product, { preload } from '@/components/product'
import React from 'react'

const checkStock = async(id)=>{
  const res = await fetch( `https://dummyjson.com/products/${id}`)
  return res.json()
} 


const page = async ({params}) => {
  const {id} = await params 

 //starting fetching the product immediately
 preload(id)

 //while the product is being requested. 
 //starting fetching the whether the items is available. 
 const stock = await checkStock(id) 

 if(stock.stock <= 0 || stock.availabilityStatus !== "In Stock"){
    return <p>Stock is not available here.</p>
 }
  return (
    <div>
       <Product id={id}/>
    </div>
  )
}

export default page
