'use client'
import React, { use } from 'react'

const page = ({params}) => {  
    const {slug}= use(params) 
  return (
    <div>
       <h1>Hello, This is Blog Post Page! {slug} </h1>  
    </div>
  )
}

export default page
