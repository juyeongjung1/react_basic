// ➀ 確認：useState を react からインポートしていることを確認してください。
import { useState } from 'react'

export default function Q2_3() {
  const productName = 'ノート'
  const price = 250
  // ➁ 実装：useState の初期値を 0 から 1 に変更してください。
  const [quantity, setQuantity] = useState(0)

  const addTwo = () => {
    // ➂ 実装：現在の数量を 2 個増やした値を setQuantity に渡してください。
    setQuantity(quantity)
  }

  return (
    <main className="container mt-4">
      <h1>商品購入数の確認</h1>
      <p>商品名：{productName}</p>
      <p>単価：{price}円</p>
      {/* ➃ 実装：数量欄の xxx に quantity の値を、
          合計欄の yyy に price と quantity を掛けた結果を表示してください。 */}
      <p>数量：xxx個</p>
      <p>合計：yyy円</p>
      {/* ➄ 実装：onClick に指定されている仮の関数を addTwo に置き換えてください。 */}
      <button className="btn btn-primary" onClick={() => {}}>
        2個追加
      </button>
    </main>
  )
}
