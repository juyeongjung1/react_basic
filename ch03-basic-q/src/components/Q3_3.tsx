import { Routes, Route } from 'react-router'
import Sample3_1 from './reference/Sample3_1'
// ➃ 実装：Layout3_3Qコンポーネントをインポートしてください。

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

export default function Q3_3() {
  return (
    <Routes>
      {/* ➄ 実装：下の3つのRouteを、Layout3_3Qを表示する親Routeで囲んでください。 */}
      <Route index element={<HomePage />} />
      <Route path="products" element={<Sample3_1 />} />
      <Route path="guide" element={<GuidePage />} />
    </Routes>
  )
}
