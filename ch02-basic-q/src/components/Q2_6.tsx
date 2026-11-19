export default function Q2_6() {
  // ➀ 確認：4件の商品データがproducts配列に
  //    格納されていることを確認してください。
  const products = [
    { id: 201, name: 'ファイル', price: 600 },
    { id: 202, name: 'クリップ', price: 180 },
    { id: 203, name: '付箋', price: 240 },
    { id: 204, name: '封筒', price: 100 }
  ]

  return (
    <main className="container mt-4">
      <h1>商品一覧</h1>
      <table className="table table-bordered w-auto">
        {/* ➁ 確認：商品番号・商品名・単価の
            見出しを確認してください。 */}
        <thead className="table-light">
          <tr>
            <th>商品番号</th>
            <th>商品名</th>
            <th>単価</th>
          </tr>
        </thead>
        <tbody>
          {/* ➂ 実装：products配列をmap()で繰り返し、
              下の<tr>を商品データの件数だけ
              生成するようにしてください。
              1件分の変数名はproductとしてください。 */}

          {/* ➃ 実装：繰り返し生成する<tr>に、
              product.idを使用したkey属性を
              追加してください。 */}

          {/* ➄ 実装：各<td>の「未設定」を、
              productのid、name、priceに
              置き換えて表示してください。 */}
          <tr>
            <td>未設定</td>
            <td>未設定</td>
            <td>未設定円</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
