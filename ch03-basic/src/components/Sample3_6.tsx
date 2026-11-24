import { Link, Routes, Route } from 'react-router'
import Layout3_6 from './Layout3_6'
import ProductCard3_6 from './ProductCard3_6'
import ProductDetail3_6 from './ProductDetail3_6'
import ProductRegister3_6 from './ProductRegister3_6'
import { products } from '../data/products3_6'

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
      <Link to="/sample-3-6/products/new" className="btn btn-primary mb-3">
        商品登録
      </Link>
      <div className="row g-3">
        {products.map((product) => (
          <ProductCard3_6
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

export default function Sample3_6() {
  return (
    <Routes>
      <Route element={<Layout3_6 />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListPage />} />
        <Route path="products/new" element={<ProductRegister3_6 />} />
        <Route path="products/:id" element={<ProductDetail3_6 />} />
        <Route path="guide" element={<GuidePage />} />
      </Route>
    </Routes>
  )
}
