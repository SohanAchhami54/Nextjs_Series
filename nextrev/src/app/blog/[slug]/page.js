
import React from 'react'

const page = async ({params}) => { 
    const {slug} = await params
  return (
    <div>
      <h1>This is new Blog page.</h1> 
      <div className='flex gap-3'>
        <span>{slug}</span> 
      </div>
        
    </div>
  )
}

export default page
