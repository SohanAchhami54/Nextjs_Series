import { cacheLife } from 'next/cache'
import React from 'react'

const Blogposts = async () => { 
    'use cache'
    cacheLife('hours')

    const response = await fetch('https://api.vercel.app/blog') 
    const blogs = await response.json()

    return (
        <div>
            {blogs.slice(0,5).map((blog) => (
                <p key={blog.id}>{blog.title}</p>
            ))}
        </div>
    )
}

export default Blogposts