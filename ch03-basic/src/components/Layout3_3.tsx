import { Outlet } from 'react-router'

export default function Layout3_3() {
  return (
    <>
      <header className="bg-dark text-white p-3">
        商品管理システム
      </header>

      <nav className="nav nav-pills bg-light p-3 gap-2"
           aria-label="商品管理システムのメニュー">
        <span className="nav-link text-dark">ホーム</span>
        <span className="nav-link text-dark">商品一覧</span>
        <span className="nav-link text-dark">ご利用案内</span>
      </nav>

      <Outlet />

      <footer className="bg-light text-center p-3 mt-4">
        商品管理システム
      </footer>
    </>
  )
}
