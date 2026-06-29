import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex gap-3 p-2'>
         <div className='flex flex-col gap-2'>
            <Link href='/store/dashboard'>Dashboard</Link>
            <Link href='/store/product'>Product</Link>
            <Link href='/store/category'>Category</Link>
         </div>
          <main>
            {children}
        </main>
    </div>
  )
}

export default layout
