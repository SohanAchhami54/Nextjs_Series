import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>This is blog page.</h1> 
      <Link href={`/blog/a`}>
         Click here to see dynamic route
      </Link>
    </div>
  )
}

export default page
