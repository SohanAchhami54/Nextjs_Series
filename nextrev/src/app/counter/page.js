import LikeButton from '@/components/LikeButton'
import React from 'react'

const page = () => { 
  const likes =20
  return (
    <div>
       <LikeButton initiallikes={likes}/>
    </div>
  )
}

export default page
