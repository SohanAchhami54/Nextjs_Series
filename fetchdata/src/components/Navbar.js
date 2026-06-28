import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className='flex justify-around items-center py-4 bg-gray-700 '>
           <h1 className='text-xl'>Fetchdata</h1>
             <div className='flex gap-3 text-sm md:text-base '>
                 <Link href='/'>Home </Link>
                 <Link  href='/about'>About </Link>
                 <Link href='/post'>Post </Link>
                 <Link href='/store'>Store </Link>
                 <Link href='/contact'>Contact </Link>
             </div>
       </nav>
    </div>
  )
}

export default Navbar
