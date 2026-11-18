export default function Q2_2() {
  const product = {
    name: 'ノート',
    price: 300,
    imagePath: '/images/notebook.png'
  }

  const quantity = 3
  const textClass = 'text-primary fw-bold'

  return (
    <main className="container mt-4">
      <h1>商品情報</h1>
      {/* ➀ 実装：src には product の imagePath、alt には product の name を指定してください。 */}
      <img src="/images/notebook.png" alt="商品画像" width={180} />

      {/* ➁ 実装：商品名・単価・数量の「未設定」を、順に
          {product.name}、{product.price}、{quantity} に置き換えてください。 */}
      <p>商品名：未設定</p>
      <p>単価：未設定円</p>
      <p>数量：未設定個</p>

      {/* ➂ 実装：合計の「未設定」を、product の price と quantity を掛けた結果に置き換えてください。
          ➃ 実装：同じ <p> に、textClass で指定したクラスを適用してください。 */}
      <p       >合計：未設定円</p>
    </main>
  )
}
