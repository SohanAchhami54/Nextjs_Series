import Dashboard from '@/components/Dashboard'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import { getProducts } from '@/lib/getProducts'
import React, { Suspense } from 'react'

const page = () => {
    const data= getProducts()
  return (
    <Suspense fallback={<LoadingSkeleton/>}>
        <Dashboard data={data}/>
    </Suspense>
  )
}

export default page
