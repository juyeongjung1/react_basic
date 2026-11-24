// ➀ 確認：react-routerからLink・NavLink・Outletをインポートしていることを確認してください。
import { Link, NavLink, Outlet } from 'react-router'

export default function Q3_4() {
  return (
    <>
      <header className="bg-dark text-white p-3">
        {/* ➁ 実装：下の仮表示を、商品管理システムと表示するLinkに置き換えてください。
            移動先は /sample-3-4、クラスは text-white text-decoration-none を指定してください。 */}
        <span>商品管理システム</span>
      </header>

      <nav className="nav nav-pills bg-light p-3 gap-2"
           aria-label="商品管理システムのメニュー">
        {/* ➂ 実装：下の仮表示を、ホームと表示するNavLinkに置き換えてください。
            移動先は /sample-3-4、クラスは nav-link を指定してください。
            ホームのURLと完全に一致した場合だけ強調するよう、end属性も指定してください。 */}
        <span className="nav-link">ホーム</span>
        {/* ➃ 実装：下の仮表示を、商品一覧と表示するNavLinkに置き換えてください。
            移動先は /sample-3-4/products、クラスは nav-link を指定してください。 */}
        <span className="nav-link">商品一覧</span>
        {/* ➄ 実装：下の仮表示を、ご利用案内と表示するNavLinkに置き換えてください。
            移動先は /sample-3-4/guide、クラスは nav-link を指定してください。 */}
        <span className="nav-link">ご利用案内</span>
      </nav>

      <Outlet />

      <footer className="bg-light text-center p-3 mt-4">
        商品管理システム
      </footer>
    </>
  )
}
