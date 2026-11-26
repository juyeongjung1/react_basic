// ➀ 実装：reactからuseStateをインポートしてください。
import axios from 'axios'

// ➁ 確認：REST APIから取得する商品1件分のデータの型を確認してください。
type Product = {
  id: number
  name: string
  price: number
  imagePath: string
}

export default function Q4_3() {
  // ➂ 実装：次の通常の変数を、useState<Product[]>([]) を使用した
  // productsとsetProductsの定義に変更してください。
  const products: Product[] = []

  async function handleGetProducts() {
    const response = await axios.get<Product[]>('/api/products')
    // ➃ 実装：次のコンソールへの出力を、取得したデータで
    // productsのstateを更新する処理に変更してください。
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
