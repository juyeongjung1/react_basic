// ➀ 実装：react-routerからLinkとNavLinkを追加でインポートしてください。Outletのインポートは残してください。
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <header className="bg-dark text-white p-3">
        {/* ➁ 実装：次のシステム名をLinkに変更してください。toに/sample-3-4、classNameにtext-reset text-decoration-noneを指定します。 */}
        商品管理システム
      </header>

      <nav className="nav nav-pills bg-light p-3 gap-2"
           aria-label="商品管理システムのメニュー">
        {/* ➂ 実装：次のspanをNavLinkに置き換えてください。toに/sample-3-4、classNameにnav-linkを指定します。 ホーム画面を表示している場合だけ強調されるようにendを指定してください。 */}
        <span className="nav-link text-dark">ホーム</span>
        {/* ➃ 実装：次のspanをNavLinkに置き換えてください。toに/sample-3-4/products、classNameにnav-linkを指定します。 */}
        <span className="nav-link text-dark">商品一覧</span>
        {/* ➄ 実装：次のspanをNavLinkに置き換えてください。toに/sample-3-4/guide、classNameにnav-linkを指定します。 */}
        <span className="nav-link text-dark">ご利用案内</span>
      </nav>

      <Outlet />

      <footer className="bg-light text-center p-3 mt-4">
        商品管理システム
      </footer>
    </>
  )
}
