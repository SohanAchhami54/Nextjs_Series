import Blogposts from '@/components/Blogposts'
import UserPreferences from '@/components/UserPreferences'
import CurrentTime from '@/components/UserPreferences'
import Link from 'next/link'
import React, { Suspense } from 'react'

const page = () => { 
    const blogging=[
        {id:1,name:'worldnews',price:12000},
        {id:2,name:'sports',price:14000},
        {id:3,name:'stockprice',price:12000},
    ]
  return (
    <div className='flex flex-col gap-5'>
      <ul>
        {blogging.map((blog)=>(
            <li key={blog.id}>
                {/* it is being prefetched here. */}
                <Link href={`/blog/${blog.name}`}>{blog.name}</Link>
            </li>     
        ))}
      </ul>
     
      {/* Static content  */}
      <h1>Our blog</h1>

      {/* Cached dynamic content */}
      <Blogposts/> 

      {/* Runtime dynamic content */}
      <Suspense fallback={<p>Loading your preferences...</p>}>
         <UserPreferences/>
      </Suspense>
      
    </div>
  )
}

export default page
