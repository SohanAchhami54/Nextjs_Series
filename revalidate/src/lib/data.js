import { cacheLife, cacheTag } from "next/cache"

const getProducts= async()=>{
    'use cache' 
    cacheLife('hours') 
    cacheTag('products') 

    const res = await fetch('https://fakestoreapi.com/products') 
    return res.json()
}


const getByProductById=async(id)=>{
    'use cache'
    cacheLife('hours') 
    cacheTag(`product-${id}`) 

    const res = await fetch(`https://fakestoreapi.com/products/${id}`) 
    return res.json()
}

export {getProducts,getByProductById}