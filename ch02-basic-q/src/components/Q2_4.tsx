import { useState } from 'react'

export default function Q2_4() {
  const [selectedName, setSelectedName] = useState('未選択')

  // ➀ 確認：引数を受け取るイベントハンドラーの
  //    定義を確認してください。
  const showSelection = (name: string) => {
    setSelectedName(name)
  }

  // ➁ 確認：引数を受け取らないイベントハンドラーの
  //    定義を確認してください。
  const clearSelection = () => {
    setSelectedName('未選択')
  }

  return (
    <main className="container mt-4">
      <h1>商品の選択</h1>
      <p>選択中の商品：{selectedName}</p>

      {/* ➂ 実装：開始タグに onClick 属性を追加し、
          'ノート' を showSelection に渡してください。 */}
      <button className="btn btn-outline-primary me-2"
      >
        ノートを選択
      </button>

      {/* ➃ 実装：開始タグに onClick 属性を追加し、
          'ボールペン' を showSelection に渡してください。 */}
      <button className="btn btn-outline-primary me-2"
      >
        ボールペンを選択
      </button>

      {/* ➄ 実装：開始タグに onClick 属性を追加し、
          clearSelection をそのまま指定してください。 */}
      <button className="btn btn-secondary"
      >
        選択を解除
      </button>
    </main>
  )
}
