import { useState } from 'react'
import axios from 'axios'

type Product = {
  id: number
  name: string
  price: number
  imagePath: string
}

export default function Q4_3() {
  // ➀ 確認：Product型の配列をstateで管理し、初期値に空配列を指定していることを確認してください。
  const [products, setProducts] = useState<Product[]>([])

  async function handleGetProducts() {
    // ➁ 実装：axios.get()の空欄に、商品一覧を取得するURLのパスを指定してください。
    const response = await axios.get<Product[]>('')
    // ➂ 実装：次のコンソールへの出力を、取得したデータでstateを更新する処理に変更してください。
    console.log(response.data)
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
          {/* ➃ 確認：アロー関数の引数 product に、
              どの配列の要素が1件ずつ渡されるか確認してください。 */}
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
