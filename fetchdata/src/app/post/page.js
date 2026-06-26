import Blogpost from '@/components/Blogpost'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>This is about Post page. </h1>
       <Suspense fallback={<LoadingSkeleton/>} >
           <Blogpost/>
       </Suspense>
    </div>
  )
}
export default page
