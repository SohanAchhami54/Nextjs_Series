import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <>
      <nav className='py-3 flex justify-around items-center bg-gray-700'>
          <h1>MutateData</h1>
            <div className='flex gap-2'>
                <Link href='/' >Home</Link>
                <Link href='/about' >About</Link>
                <Link href='/login'>Login</Link>
            </div>
      </nav>
   </>
  )
}

export default Navbar
