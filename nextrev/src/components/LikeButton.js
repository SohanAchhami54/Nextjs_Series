'use client'
import { incrementLike } from '@/lib/action'
import React, { useState } from 'react'

const LikeButton = ({initiallikes}) => { 
    const [likes,setlikes]=useState(initiallikes)
  return (
    <div> 
        <p>Total likes:{likes}</p> 
        <button onClick={async ()=>{
            const updatelike = await incrementLike(likes)
            setlikes(updatelike)
        }}>
            Like
        </button>
      
    </div>
  )
}

export default LikeButton
