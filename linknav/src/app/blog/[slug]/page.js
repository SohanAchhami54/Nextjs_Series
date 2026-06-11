import React from 'react'
const page =async ({params,searchParams}) => {   
    const {slug} =await params
     const {query='Macbook',page='2',sort='asc'}= await searchParams

     await new Promise((resolve)=>setTimeout(resolve,1500))
     
  return (
    <div>
       My blog: {slug}  
       <h1>Product Listing:</h1>
       <p>Search Query:{query} </p>
       <p>Page number:{page} </p>
       <p>Sorting Order:{sort} </p>
    </div>
  )
}

export default page
