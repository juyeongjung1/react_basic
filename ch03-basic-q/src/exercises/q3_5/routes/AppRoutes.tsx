import { Routes, Route } from 'react-router'
import HomePage from '../pages/HomePage'
import ProductListPage from '../pages/ProductListPage'
import GuidePage from '../pages/GuidePage'
import MainLayout from '../layouts/MainLayout'
// ➀ 実装：../pages/ProductDetailPage からProductDetailPageをデフォルトインポートしてください。

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListPage />} />
        {/* ➁ 実装：productsに続く1つのパスをidというURLパラメータとして定義し、ProductDetailPageを表示する子Routeを追加してください。 */}
        <Route path="guide" element={<GuidePage />} />
      </Route>
    </Routes>
  )
}
