import { Link, NavLink, Outlet } from 'react-router'

export default function Sample3_4() {
  return (
    <>
      <header className="bg-dark text-white p-3">
        <Link
          to="/sample-3-4"
          className="text-white text-decoration-none"
        >
          商品管理システム
        </Link>
      </header>

      <nav className="nav nav-pills bg-light p-3 gap-2"
           aria-label="商品管理システムのメニュー">
        <NavLink to="/sample-3-4" className="nav-link" end>
          ホーム
        </NavLink>
        <NavLink to="/sample-3-4/products" className="nav-link">
          商品一覧
        </NavLink>
        <NavLink to="/sample-3-4/guide" className="nav-link">
          ご利用案内
        </NavLink>
      </nav>

      <Outlet />

      <footer className="bg-light text-center p-3 mt-4">
        商品管理システム
      </footer>
    </>
  )
}
