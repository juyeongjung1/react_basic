import { Routes, Route } from 'react-router'
import Layout3_5 from './Layout3_5'
import ProductCard3_5 from './ProductCard3_5'
import ProductDetail3_5 from './ProductDetail3_5'
import { products } from '../data/products3_5'

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
          <ProductCard3_5
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

export default function Sample3_5() {
  return (
    <Routes>
      <Route element={<Layout3_5 />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListPage />} />
        <Route path="products/:id" element={<ProductDetail3_5 />} />
        <Route path="guide" element={<GuidePage />} />
      </Route>
    </Routes>
  )
}
