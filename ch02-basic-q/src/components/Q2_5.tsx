import { useState } from 'react'

export default function Q2_5() {
  // ➀ 確認：在庫数をstockというstateで管理し、
  //    初期値が2になっていることを確認してください。
  const [stock, setStock] = useState(2)

  const purchaseOne = () => {
    // ➁ 実装：stockが0より大きい場合だけ、
    //    setStockに現在の在庫数を1減らした値を渡す
    //    if文を記述してください。
    //    下の仮の処理を修正してください。
    setStock(stock)
  }

  return (
    <main className="container mt-4">
      <h1>商品の在庫確認</h1>
      <p>商品名：ノート</p>
      <p>在庫数：{stock}個</p>

      {/* ➂ 実装：三項演算子を使用し、在庫状況と
          購入可否の表示を切り替えてください。
          stockが0より大きい場合は「在庫あり」
          「購入できます」、それ以外は「在庫切れ」
          「購入できません」と表示してください。
          購入可否のclassNameも、在庫がある場合は
          text-success fw-bold、ない場合は
          text-danger fw-boldに切り替えてください。 */}
      <p>在庫状況：未設定</p>
      <p className="text-muted fw-bold">未設定</p>

      {/* ➃ 実装：stockが1の場合だけ
          「残り1個です」と表示するp要素を、
          &&を使用してこの下に記述してください。
          classNameにはalert alert-warningを
          指定してください。 */}


      {/* ➄ 実装：在庫が0個の場合に購入できないよう、
          次のbutton要素にdisabled属性を追加してください。 */}
      <button className="btn btn-primary" onClick={purchaseOne}>
        1個購入
      </button>
    </main>
  )
}
