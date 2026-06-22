import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  return (
    <div>
       <nav className='flex justify-around items-center bg-neutral-700 px-4 py-3'>
          <h1 className='text-2xl'>Link</h1>  
           <div className='flex gap-3 text-xs md:text-base'>
              <Link href={'/'} >Home</Link>
              <Link href={'/about'} >About</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/contact'}>Contact</Link>
           </div>
       </nav>
    </div>
  )
}

export default Navbar
