import { useState } from 'react'
import axios from 'axios'

type Product = {
  id: number
  name: string
  price: number
  imagePath: string
}

export default function Sample4_3() {
  const [products, setProducts] = useState<Product[]>([])

  async function handleGetProducts() {
    const response = await axios.get<Product[]>('/api/products')
    setProducts(response.data)
  }

  return (
    <main className="container mt-4">
      <h1>商品一覧</h1>
      <button type="button" className="btn btn-primary mb-3"
              onClick={handleGetProducts}>
        商品一覧を取得
      </button>
      <table className="table table-bordered w-auto">
        <thead className="table-light">
          <tr>
            <th>商品番号</th>
            <th>商品名</th>
            <th>単価</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
