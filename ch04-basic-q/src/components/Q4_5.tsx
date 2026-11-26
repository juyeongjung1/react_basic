import { useEffect, useState } from 'react'
import axios from 'axios'

type Product = {
  id: number
  name: string
  price: number
  imagePath: string
}

export default function Q4_5() {
  const [products, setProducts] = useState<Product[]>([])
  // ➀ 確認：エラーメッセージを管理するstateの定義を確認してください。
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    async function loadProducts() {
      // ➁ 実装：tryブロックの開始部分を記述してください。
        const response = await axios.get<Product[]>('/api/products')
        setProducts(response.data)
      // ➂ 実装：tryブロックを閉じ、例外をerrorで受け取るcatchブロックの開始部分を記述してください。
        // ➃ 実装：console.error()でerrorを出力し、setErrorMessage()で
        // 「商品情報の取得に失敗しました。」というメッセージを設定してください。
      // ➄ 実装：catchブロックを閉じてください。
    }

    loadProducts()
  }, [])

  return (
    <main className="container mt-4">
      <h1>商品一覧</h1>
      {/* ➅ 確認：エラーメッセージが空文字列でない場合に表示する処理を確認してください。 */}
      {errorMessage !== '' && (
        <p className="alert alert-danger" role="alert">{errorMessage}</p>
      )}
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
