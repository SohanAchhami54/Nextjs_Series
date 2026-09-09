import React from 'react'

const BlogList =async () => {
       const data = await fetch('https://api.vercel.app/blog')
      const posts = await data.json()
  return (
    <div>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
           {posts.map((post) => (
            <div
              key={post.id}
              className="bg-black rounded-lg p-5 border border-gray-700 
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40
                         cursor-pointer"
            >
              <p className="text-sm text-gray-400 mb-1">#{post.id}</p>
              <h2 className="text-base font-medium text-white">
                {post.title}
              </h2>
            </div>
          ))}
        </ul>
    </div>
  )
}

export default BlogList
