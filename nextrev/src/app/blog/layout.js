import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex flex-col'>
        <h1>This is blog layout.</h1>
        {children}
    </div>
  )
}

export default layout
