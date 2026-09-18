import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>This is image folder.</h1>
      <div>
         <Image
          src="https://i.pinimg.com/736x/57/a8/5a/57a85ae0cf6fcdbf7144af2a715b22bd.jpg"
          alt="Description"
          width={736}
          height={736} // adjust to actual aspect ratio
         />
      </div>
      
    </div>
  )
}

export const metadata={
  title:'image',
}

export default page
