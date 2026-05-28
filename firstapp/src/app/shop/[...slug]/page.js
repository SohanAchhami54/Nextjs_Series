import React from 'react'

const page =async ({params}) => { 
const {slug}=await params
  return (
    <div>
       <h1>This is dynamic Shop page.{slug} </h1>
    </div>
  )
}
export default page
