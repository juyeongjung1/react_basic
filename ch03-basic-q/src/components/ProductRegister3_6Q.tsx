// ➀ 実装：react-routerからuseNavigateを追加でインポートしてください。
import { Link } from 'react-router'

export default function ProductRegister3_6Q() {
  // ➁ 実装：useNavigate()を使用して画面遷移用の関数を取得し、
  // navigateという名前の変数に格納してください。

  function handleRegister() {
    // 実際の開発では、REST APIで商品を登録し、成功を確認する。
    // ➂ 実装：navigate()を使用して、/sample-3-6/products へ移動してください。
  }

  return (
    <main className="container mt-4">
      <h1>商品登録</h1>
      <p className="alert alert-info">
        この節では、商品登録処理は行わず、画面遷移のみを確認します。
      </p>
      <div className="d-flex gap-2">
        <button type="button" className="btn btn-primary"
                onClick={handleRegister}>
          登録
        </button>
        <Link to="/sample-3-6/products" className="btn btn-secondary">
          キャンセル
        </Link>
      </div>
    </main>
  )
}
