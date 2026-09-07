import Link from 'next/link'
import React from 'react'

const page = () => { 
    const blogging=[
        {id:1,name:'worldnews',price:12000},
        {id:2,name:'sports',price:14000},
        {id:3,name:'stockprice',price:12000},
    ]
  return (
    <div>
      <ul>
        {blogging.map((blog)=>(
            <li key={blog.id}>
                {/* it is being prefetched here. */}
                <Link href={`/blog/${blog.name}`}>{blog.name}</Link>
            </li>     
        ))}
      </ul>
    </div>
  )
}

export default page
