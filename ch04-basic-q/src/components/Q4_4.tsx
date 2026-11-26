// ➀ 実装：reactからuseEffectを追加でインポートしてください。
import { useState } from 'react'
import axios from 'axios'

type Product = {
  id: number
  name: string
  price: number
  imagePath: string
}

export default function Q4_4() {
  const [products, setProducts] = useState<Product[]>([])

  // ➁ 実装：ここにuseEffectの開始部分を記述してください。
  //     次の非同期関数の定義と呼び出しを、useEffectに渡す関数の中に記述するようにしてください。
    async function loadProducts() {
      const response = await axios.get<Product[]>('/api/products')
      setProducts(response.data)
    }

    // ➂ 実装：loadProducts()を呼び出してください。
  // ➃ 実装：依存配列に空配列を指定して、useEffectの呼び出しを閉じてください。

  return (
    <main className="container mt-4">
      <h1>商品一覧</h1>
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
