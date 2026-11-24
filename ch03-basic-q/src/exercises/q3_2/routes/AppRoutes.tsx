// ➀ 確認：react-routerからRoutesとRouteをインポートしていることを確認してください。
import { Routes, Route } from 'react-router'
// ➁ 実装：../pages/HomePage、../pages/ProductListPage、../pages/GuidePage から、
// HomePage、ProductListPage、GuidePageをそれぞれデフォルトインポートしてください。

export default function AppRoutes() {
  return (
    <Routes>
      {/* ➂ 実装：入口のURL /sample-3-2 に対応するRouteを記述してください。pathは空文字列、elementはHomePageとします。 */}
      {/* ➃ 実装：/sample-3-2/products に対応するRouteを記述してください。相対パスproducts、elementはProductListPageとします。 */}
      {/* ➄ 実装：/sample-3-2/guide に対応するRouteを記述してください。相対パスguide、elementはGuidePageとします。 */}
      {/* 未設定のURL用の表示です。このRouteは変更しないでください。 */}
      <Route path="*" element={<p>ルートを設定してください。</p>} />
    </Routes>
  )
}
