// ➀ 実装：react-routerから、Outletに加えてLinkとNavLinkをインポートしてください。
import { Outlet } from 'react-router'

export default function Layout3_4Q() {
  return (
    <>
      <header className="bg-dark text-white p-3">
        {/* ➁ 実装：下のシステム名を、ホームへ移動するLinkに置き換えてください。
            遷移先は /sample-3-4、クラスは text-white text-decoration-none を指定してください。 */}
        商品管理システム
      </header>

      <nav className="nav nav-pills bg-light p-3 gap-2"
           aria-label="商品管理システムのメニュー">
        {/* ➂ 実装：下の「ホーム」を、ホーム画面へ移動するNavLinkに置き換えてください。
            遷移先は /sample-3-4、クラスは nav-link を指定してください。
            ホームのURLと一致する場合だけ強調されるようにしてください。 */}
        <span className="nav-link text-dark">ホーム</span>
        {/* ➃ 実装：下の「商品一覧」を、商品一覧画面へ移動するNavLinkに置き換えてください。
            遷移先は /sample-3-4/products、クラスは nav-link を指定してください。 */}
        <span className="nav-link text-dark">商品一覧</span>
        {/* ➄ 実装：下の「ご利用案内」を、ご利用案内画面へ移動するNavLinkに置き換えてください。
            遷移先は /sample-3-4/guide、クラスは nav-link を指定してください。 */}
        <span className="nav-link text-dark">ご利用案内</span>
      </nav>

      <Outlet />

      <footer className="bg-light text-center p-3 mt-4">
        商品管理システム
      </footer>
    </>
  )
}
