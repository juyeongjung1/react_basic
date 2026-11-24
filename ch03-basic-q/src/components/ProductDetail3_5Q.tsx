// ➃ 実装：react-routerからuseParamsを追加でインポートしてください。
import { Link } from 'react-router'

export default function ProductDetail3_5Q() {
  // ➄ 実装：useParams()を使用して、URLパラメータidを取得する宣言に
  // 置き換えてください。
  const id = ''

  // 実際の開発では、idを使ってREST APIから商品情報を取得する。

  return (
    <main className="container mt-4">
      <h1>商品詳細</h1>
      <p>商品番号：{id}</p>
      <p className="alert alert-info">
        実際の開発では、この商品番号を使ってREST APIから商品情報を取得します。
      </p>
      <Link to="/sample-3-5/products" className="btn btn-secondary">
        商品一覧へ戻る
      </Link>
    </main>
  )
}
