// ➀ 確認：useState を react からインポートしていることを確認してください。
import { useState } from 'react'

export default function Q2_3() {
  const productName = 'ノート'
  const price = 250

  // ➁ 実装：次の宣言を、useState で数量を初期化するコードに書き換えてください。
  let quantity = 1

  const addOne = () => {
    // ➂ 実装：次の代入を、setQuantity を使って
    //    quantity + 1 に更新するコードに書き換えてください。
    quantity = quantity + 1
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
      {/* ➄ 確認：「1個追加」ボタンをクリックすると、
          addOne 関数が呼ばれることを確認してください。 */}
      <button className="btn btn-primary" onClick={addOne}>
        1個追加
      </button>
    </main>
  )
}
