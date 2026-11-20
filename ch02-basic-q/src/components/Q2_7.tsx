import { useState } from 'react'

export default function Q2_7() {
  // ➀ 確認：3つの入力項目に対応するstateと、それぞれの更新用関数を確認してください。
  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState('文房具')
  const [isAvailable, setIsAvailable] = useState(false)

  const clearInputs = () => {
    setProductName('')
    setCategory('文房具')
    setIsAvailable(false)
  }

  return (
    <main className="container mt-4">
      <h1>商品情報の入力</h1>

      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          商品名
        </label>
        {/* ➁ 実装：次のinput要素にvalue属性とonChange属性を追加してください。
            productNameの値を表示し、入力値が変わるたびにsetProductNameで
            商品名を更新するようにしてください。 */}
        <input
          id="productName"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          カテゴリ
        </label>
        {/* ➂ 実装：次のselect要素にvalue属性とonChange属性を追加してください。
            categoryの値を選択状態に反映し、選択を変えたときはsetCategoryで
            カテゴリを更新するようにしてください。 */}
        <select
          id="category"
          className="form-select"
        >
          <option value="文房具">文房具</option>
          <option value="事務用品">事務用品</option>
          <option value="電子機器">電子機器</option>
        </select>
      </div>

      <div className="form-check mb-3">
        {/* ➃ 実装：次のinput要素にchecked属性とonChange属性を追加してください。
            isAvailableの値をチェックの有無に反映し、チェックを付けたり外したりしたら
            setIsAvailableで販売状態を更新するようにしてください。 */}
        <input
          id="isAvailable"
          type="checkbox"
          className="form-check-input"
        />
        <label htmlFor="isAvailable"
          className="form-check-label">
          販売中
        </label>
      </div>

      {/* ➄ 確認：「入力をクリア」を押すとclearInputs関数が実行され、
          商品名・カテゴリ・販売状態のstateが初期値に戻ることを確認してください。 */}
      <button className="btn btn-secondary mb-3"
        onClick={clearInputs}>
        入力をクリア
      </button>

      <h2 className="h5">入力内容の確認</h2>
      {/* ➅ 実装：次の3つのp要素に、JSXの {} を使って入力内容を表示してください。
          商品名にはproductNameの値を表示し、空文字列の場合は「未入力」と表示してください。
          カテゴリにはcategoryの値を表示してください。
          販売状態は三項演算子を使い、isAvailableがtrueの場合は「販売中」、
          falseの場合は「販売停止」と表示してください。 */}
      <p>商品名：</p>
      <p>カテゴリ：</p>
      <p>販売状態：</p>
    </main>
  )
}
