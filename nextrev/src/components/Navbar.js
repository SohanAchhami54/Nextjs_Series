import Link from 'next/link'
import React from 'react'

const Navbar = () => { 
  return (
    <div>
      <div className='flex justify-around py-4'>
        <Link href={'/'}>Next.js</Link>
         <div className='flex gap-3'>
            <Link href={'/'}>Home</Link>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/counter'}>Counter</Link>
            <Link href={'/weblog'}>Weblog</Link>
            <Link href={'/microblog'}>Microblog</Link>
            <Link href={`/product/10`}>Product</Link>
            <Link href={`/login`}>Login</Link>
         </div>
      </div>
    </div>
  )
}

export default Navbar
