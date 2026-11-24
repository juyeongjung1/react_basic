import { Routes, Route } from 'react-router'
import Layout3_5Q from './Layout3_5Q'
import ProductCard3_5Q from './ProductCard3_5Q'
// ➀ 実装：ProductDetail3_5Qコンポーネントをインポートしてください。
import { products } from '../data/products3_5Q'

function HomePage() {
  return (
    <main className="container mt-4">
      <h1>ホーム</h1>
      <p>商品管理システムへようこそ。</p>
    </main>
  )
}

function GuidePage() {
  return (
    <main className="container mt-4">
      <h1>ご利用案内</h1>
      <p>このシステムでは商品情報を確認できます。</p>
    </main>
  )
}

function ProductListPage() {
  return (
    <main className="container mt-4">
      <h1>商品一覧</h1>
      <div className="row g-3">
        {products.map((product) => (
          <ProductCard3_5Q
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imagePath={product.imagePath}
          />
        ))}
      </div>
    </main>
  )
}

export default function Q3_5() {
  return (
    <Routes>
      <Route element={<Layout3_5Q />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListPage />} />
        {/* ➁ 実装：productsに続く商品番号をidというURLパラメータとして
            受け取り、ProductDetail3_5Qを表示する子ルートを追加してください。 */}
        <Route path="guide" element={<GuidePage />} />
      </Route>
    </Routes>
  )
}
