'use client'
import Counter from '@/components/Counter'
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
  const pathname=usePathname()
  return (
    <div>
       <h1>This is home page.</h1>
       <h1>Pathname: {pathname} </h1>
    </div>
  )
}

export default page
