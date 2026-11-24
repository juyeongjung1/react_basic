import { Routes, Route } from 'react-router'
import HomePage from '../pages/HomePage'
import ProductListPage from '../pages/ProductListPage'
import GuidePage from '../pages/GuidePage'
// ➃ 実装：../layouts/MainLayout からMainLayoutをデフォルトインポートしてください。

export default function AppRoutes() {
  return (
    <Routes>
      {/* ➄ 実装：以下の3つのRouteを、MainLayoutを表示するpathなしの親Routeで囲んでください。 */}
      {/* ➅ 実装：ホームのRouteのpath=""をindexに置き換えてください。HomePageの指定は維持してください。 */}
      <Route path="" element={<HomePage />} />
      <Route path="products" element={<ProductListPage />} />
      <Route path="guide" element={<GuidePage />} />
    </Routes>
  )
}
