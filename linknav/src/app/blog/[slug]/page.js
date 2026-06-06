import React from 'react'

const page =async ({params,searchParams}) => {   
    const {slug} =await params
     const {query='laptop',page='2',sort='asc'}= await searchParams
     
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
