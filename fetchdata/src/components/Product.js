'use client'
import React, { use } from 'react' //to fetch data in client component

const Product = ({data}) => {
    const finaldata=use(data) 
    return (
    <div>
      <h1>Total Products: {finaldata.length} </h1>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
             {
                finaldata.map((d)=>(
                    <li key={d.id} className='bg-gray-700 rounded-md p-2'>
                        <span>Title: {d.title} </span>
                        <span className='line-clamp-2'>Desc: {d.description} </span>
                    </li>
                ))
             }
        </ul>
    </div>
  )
}

export default Product
