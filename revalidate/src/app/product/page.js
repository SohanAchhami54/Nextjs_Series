import { getProducts } from '@/lib/data'
import { updateProductPrice } from '@/lib/action'

const page = async () => {
  const products = await getProducts()

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>${p.price}</p>

          <form action={updateProductPrice}>
            <input type="hidden" name="id" value={p.id} />
            <input type="number" name="price" placeholder="New price" />
            <button type="submit">Update</button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default page