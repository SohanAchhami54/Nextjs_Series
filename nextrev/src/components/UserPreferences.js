import { cookies } from 'next/headers'
import React from 'react'

const UserPreferences = async() => { 
  const theme = (await cookies()).get('theme')?.value || 'light' 
  const favorite = (await cookies()).get('category')?.value 
  return (
    <div>
      <p>Your theme: {theme} </p> 
      {favorite && <p>Favorite category:{favorite}</p> }
    </div>
  )
}

export default UserPreferences
