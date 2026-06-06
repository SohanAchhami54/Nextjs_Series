import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
       This is blog page.
       <Link href='/blog/1' >Go to blog 1 </Link>
    </div>
  )
}

export default page
