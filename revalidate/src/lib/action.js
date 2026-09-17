'use server'
import { revalidatePath, revalidateTag, updateTag } from "next/cache"

const updateProductPrice=async(formData)=>{
    const id = formData.get('id')
    const newPrice = formData.get('price')

   await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ price: newPrice }),
  })

  revalidateTag('products', 'max')
  revalidateTag(`product-${id}`, 'max')
}

const addProductReview =async(id,reviewText)=>{
    await fetch(`https://fakestoreapi.com/products/${id}/review`,{
        method:'POST', 
        body:JSON.stringify({text:reviewText})
    })
    updateTag(`product-${id}`)
}

const editProductFromDashboard= async(id,data)=>{
    await fetch(`https://fakestoreapi.com/products/${id}`,{
        method:'PUT', 
        body:JSON.stringify(data)
    })
    revalidatePath(`products-${id}`)
}

export {updateProductPrice,addProductReview,editProductFromDashboard}