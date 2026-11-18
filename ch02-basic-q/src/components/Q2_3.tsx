// ① 確認：useState を react からインポートしていることを確認する。
import { useState } from 'react'

export default function Q2_3() {
  const productName = 'ノート'
  const price = 250
  // ② 実装：useState の初期値を 0 から 1 に変更する。
  const [quantity, setQuantity] = useState(0)

  const addTwo = () => {
    // ③ 実装：setQuantity に quantity + 2 を渡す。
    setQuantity(quantity)
  }

  return (
    <main className="container mt-4">
      <h1>商品購入数の確認</h1>
      <p>商品名：{productName}</p>
      <p>単価：{price}円</p>
      {/* ④ 実装：数量を {quantity}、合計を {price * quantity} で表示する。 */}
      <p>数量：未設定個</p>
      <p>合計：未設定円</p>
      {/* ⑤ 実装：onClick の仮の関数を addTwo に置き換える。 */}
      <button className="btn btn-primary" onClick={() => {}}>
        2個追加
      </button>
    </main>
  )
}
