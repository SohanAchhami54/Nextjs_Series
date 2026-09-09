import BlogList from '@/components/BlogList'
import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

const page = () => { 
  return (
    <div>
        <header>
            <h1>Welcome to the blog.</h1>
            <p>Read the latest posts below.</p>
        </header>
      <main>
        <Suspense fallback={<Loading/>}> 
           <BlogList/>
        </Suspense>
      </main>
    </div>
  )
}

export default page