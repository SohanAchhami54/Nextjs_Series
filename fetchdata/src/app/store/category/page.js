async function getProduct(){
    const response=await fetch('https://fakestoreapi.com/products')
    return response.json()
}

async function getCategory(){
    const response=await fetch('https://fakestoreapi.com/products/categories') 
    return response.json()
}



const page = async() => { 
    const productPromise=getProduct() 
    const categoryPromise=getCategory()

    const [product,category]= await Promise.all([
        productPromise, 
        categoryPromise
    ])

    console.log('products:',product) 
    console.log('category:',category)

    return (
    <div>
        <h1>Products: {product.length} </h1>
        
        <ul>
            {
                category.map((c,index)=>(
                    <li key={index}>
                       <span> Category:  {c} </span>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default page
