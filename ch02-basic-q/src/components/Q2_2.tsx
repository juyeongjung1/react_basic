export default function Q2_2() {
  const product = {
    name: 'ノート',
    price: 300,
    imagePath: '/images/notebook.png'
  }

  const quantity = 3
  const totalClass = 'text-danger fw-bold'

  return (
    <main className="container mt-4">
      <h1>商品情報</h1>
      {/* ① 実装：src を {product.imagePath}、alt を {product.name} に変更する。 */}
      <img src="/images/notebook.png" alt="商品画像" width={180} />

      {/* ② 実装：「未設定」を順に {product.name}、{product.price}、{quantity} に置き換える。 */}
      <p>商品名：未設定</p>
      <p>単価：未設定円</p>
      <p>数量：未設定個</p>

      {/* ③ 実装：合計の「未設定」を {product.price * quantity} に置き換える。
          ④ 実装：同じ <p> の className="fw-bold" を className={totalClass} に変更する。 */}
      <p className="fw-bold">合計：未設定円</p>
    </main>
  )
}
