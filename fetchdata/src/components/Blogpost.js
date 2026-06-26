
const Blogpost = async () => {
  const data=await fetch('https://api.vercel.app/blog') 
  const posts=await data.json() 
  return (
    <div className='mx-auto max-w-4xl py-4'>
        <ul className='flex flex-wrap gap-4'>
          {
            posts.slice(0,9).map((p)=>(
                 <li key={p.id}  className='flex flex-col bg-gray-800 gap-3 w-50 p-3 rounded-md'>
                 <span>Post: {p.title} </span>
                 <span>Author: {p.author} </span>
                 <span>Category: {p.category} </span>
                  <span>Date: {p.date} </span>
                </li>
            ))
          }
        </ul>
    </div>
  )
}   
export default Blogpost
