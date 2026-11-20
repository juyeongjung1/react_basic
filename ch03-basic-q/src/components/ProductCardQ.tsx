// ➁ 実装：ProductCardQPropsという名前のPropsの型を定義してください。
// nameは文字列、priceは数値、imagePathは文字列として受け取れるようにしてください。

// ➂ 実装：次の関数の引数にProductCardQPropsの型を指定し、
// 分割代入でname・price・imagePathを受け取ってください。
export default function ProductCardQ() {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card h-100">
        {/* ➃ 実装：次のimg要素のsrcにimagePath、altにnameを設定してください。
            見出しの「商品名」をnameの値で置き換え、単価欄の「単価：」と「円」の間に
            priceの値を表示してください。 */}
        <img
          alt=""
          className="card-img-top p-3"
          style={{ height: '180px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h2 className="h5 card-title">商品名</h2>
          <p className="card-text">単価：円</p>
        </div>
      </div>
    </div>
  )
}
