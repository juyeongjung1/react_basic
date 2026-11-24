import { Link, Routes, Route } from 'react-router'
import Layout3_6Q from './Layout3_6Q'
import ProductCard3_6Q from './ProductCard3_6Q'
import ProductDetail3_6Q from './ProductDetail3_6Q'
import ProductRegister3_6Q from './ProductRegister3_6Q'
import { products } from '../data/products3_6Q'

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
          <ProductCard3_6Q
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

export default function Q3_6() {
  return (
    <Routes>
      <Route element={<Layout3_6Q />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListPage />} />
        <Route path="products/new" element={<ProductRegister3_6Q />} />
        <Route path="products/:id" element={<ProductDetail3_6Q />} />
        <Route path="guide" element={<GuidePage />} />
      </Route>
    </Routes>
  )
}
