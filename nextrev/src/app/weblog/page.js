import React from 'react'

const Page = async () => {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return (
    <div className="min-h-screen bg-gray-800 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-8 text-center">
          Blog Posts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5"> 
    
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
        </div>
      </div>
    </div>
  )
}

export default Page