import { useState } from 'react'

export default function Q2_5() {
  const [stock, setStock] = useState(2)

  // ➀ 確認：在庫がある場合だけ、在庫数を1減らす
  //    関数になっていることを確認してください。
  const purchaseOne = () => {
    if (stock > 0) {
      setStock(stock - 1)
    }
  }

  let stockMessage = '未設定'
  // ➁ 実装：stock が0より大きい場合は「在庫あり」、
  //    それ以外は「在庫切れ」を stockMessage に代入する
  //    if / else 文をここに記述してください。

  return (
    <main className="container mt-4">
      <h1>商品の在庫確認</h1>
      <p>商品名：ノート</p>
      <p>在庫数：{stock}個</p>
      <p>在庫状況：{stockMessage}</p>

      {/* ➂ 実装：次の「未設定」を三項演算子に置き換えてください。
          stock が0より大きい場合は「購入できます」、
          それ以外は「在庫切れです」と表示してください。 */}
      <p className={stock > 0
        ? 'text-success fw-bold'
        : 'text-danger fw-bold'}>
        未設定
      </p>

      {/* ➃ 実装：stock が1の場合だけ「残り1個です」と表示する
          <p> 要素を、&& を使ってこの下に記述してください。
          className は text-warning fw-bold にしてください。 */}

      {/* ➄ 実装：在庫が0個の場合に購入できないよう、
          次の button 要素に disabled 属性を追加してください。 */}
      <button
        className="btn btn-primary"
        onClick={purchaseOne}
      >
        1個購入
      </button>
    </main>
  )
}
