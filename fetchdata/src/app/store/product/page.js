import LoadingSkeleton from '@/components/LoadingSkeleton'
import Product from '@/components/Product'
import { getProducts } from '@/lib/getProducts'
import React, { Suspense } from 'react'

const page = () => { 
    const data= getProducts()
    return (
     <Suspense fallback={<LoadingSkeleton/>} >
         <Product data={data} />
     </Suspense>
  )
}

export default page
