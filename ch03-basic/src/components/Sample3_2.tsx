import { Routes, Route } from 'react-router'
import Sample3_1 from './Sample3_1'

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

export default function Sample3_2() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Sample3_1 />} />
      <Route path="/guide" element={<GuidePage />} />
    </Routes>
  )
}
