import { Link, useParams } from 'react-router'

export default function ProductDetail3_6Q() {
  const { id } = useParams()

  // 実際の開発では、idを使ってREST APIから商品情報を取得する。

  return (
    <main className="container mt-4">
      <h1>商品詳細</h1>
      <p>商品番号：{id}</p>
      <p className="alert alert-info">
        実際の開発では、この商品番号を使ってREST APIから商品情報を取得します。
      </p>
      <Link to="/sample-3-6/products" className="btn btn-secondary">
        商品一覧へ戻る
      </Link>
    </main>
  )
}
