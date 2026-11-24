import { Routes, Route } from 'react-router'
import HomePage from '../pages/HomePage'
import ProductListPage from '../pages/ProductListPage'
import GuidePage from '../pages/GuidePage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="products" element={<ProductListPage />} />
      <Route path="guide" element={<GuidePage />} />
    </Routes>
  )
}
