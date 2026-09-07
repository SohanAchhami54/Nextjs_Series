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
         </div>
      </div>
    </div>
  )
}

export default Navbar
