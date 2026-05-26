import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
       <nav className='flex  justify-around pt-5 items-center'>
        <Link href='/' >Next.js App </Link>
        <div className='flex gap-5'>
            <Link href='/about'>About </Link>
            <Link href='/contact'>Contact </Link>
            <Link href='/help'>Help&Support </Link>
        </div>
      
       </nav>
     
    </>
  )
}

export default Navbar
