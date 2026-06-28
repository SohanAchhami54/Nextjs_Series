'use client'
import React, { use } from 'react' //to fetch data in client component 

const Dashboard = ({data}) => { 
    const finalData=use(data) 
    
  return (
    <div className='p-3'>
       <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {
            finalData.map((d)=>(
                <li key={d.id} className='flex flex-col gap-3 bg-gray-600 rounded-mx p-2'>
                    <span>Category: {d.category}</span> 
                    <span className='line-clamp-3'>description: {d.description}</span> 
                    <img className='w-40' src={d.image} alt={d.title} />
                    <span>Title: {d.title} </span>
                </li>
            ))
          }
       </ul>
    </div>
  )
}

export default Dashboard
