// ➀ 確認：react-routerからRoutesとRouteをインポートしていることを確認してください。
import { Routes, Route } from 'react-router'
import Q3_1 from './Q3_1'

// ➁ 確認：下のHomePageとGuidePageが定義され、商品一覧に使うQ3_1を
// 前節のファイルからインポートしていることを確認してください。
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

function ExercisePage() {
  return (
    <main className="container mt-4">
      <h1>ルーティングの確認演習</h1>
      <p><code>Q3_2.tsx</code>の番号付きコメントに従い、URLと画面を対応付けてください。</p>
    </main>
  )
}

export default function Q3_2() {
  return (
    <Routes>
      {/* ➂ 実装：pathに「/」、elementにHomePageを表示するReact要素を
          指定したRouteを記述してください。 */}
      {/* ➃ 実装：pathに「/products」、elementにQ3_1を表示するReact要素を
          指定したRouteを記述してください。 */}
      {/* ➄ 実装：pathに「/guide」、elementにGuidePageを表示するReact要素を
          指定したRouteを記述してください。 */}
      <Route path="*" element={<ExercisePage />} />
    </Routes>
  )
}
