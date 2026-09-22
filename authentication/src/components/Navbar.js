import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around py-5'>
      <Link href={`/`}>Auth</Link> 
     
       <div className='flex gap-4'>
          <Link href={`/about`}>About</Link>
          <Link href={`/contact`}>Contact</Link>
          <Link href={`/login`}>Login</Link>
       </div>

    </div>
  )
}

export default Navbar
// rgujFSAmt2XCohmF