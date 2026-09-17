import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around py-5'>
       <Link href={'/'}>ImageOpt</Link> 
        <div className='flex gap-3'>
            <Link href={`/`}>Home</Link>
            <Link href={'/product'}>Product</Link>
            <Link href={'/image'}>Image</Link>
        </div>
    </div>
  )
}

export default Navbar
