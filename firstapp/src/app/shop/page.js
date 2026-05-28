import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>This is Shop page.</h1> 
      <div className='flex flex-col gap-5'>
         <Link href='/shop/clothes'>Click me!</Link>
        <Link href='/shop/clothes/men'>Click me!</Link>
        <Link href='/shop/clothes/women'>Click me!</Link>
        <Link href='/shop/clothes/child'>Click me!</Link>
      </div>
     
    </div>
  )
}

export default page
