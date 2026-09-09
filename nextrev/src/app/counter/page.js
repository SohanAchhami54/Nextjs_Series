"use client"

import React, { useState } from 'react'

const page = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <p>{count} likes </p>
      <button onClick={()=>setCount(prev=>prev+1)}>Click me !!</button>
    </div>
  )
}

export default page
