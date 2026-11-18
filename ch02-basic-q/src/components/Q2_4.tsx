import { useState } from 'react'

export default function Q2_4() {
  const [selectedName, setSelectedName] = useState('未選択')

  // ① 引数ありのイベントハンドラーを定義する
  //    コードを確認してください。
  const showSelection = (name: string) => {
    setSelectedName(name)
  }

  // ② 引数なしのイベントハンドラーを定義する
  //    コードを確認してください。
  const clearSelection = () => {
    setSelectedName('未選択')
  }

  return (
    <main className="container mt-4">
      <h1>商品の選択</h1>
      <p>選択中の商品：{selectedName}</p>

      {/* ③ onClick属性を追加し、showSelectionに
          'ノート'を渡して呼び出してください。 */}
      <button className="btn btn-outline-primary me-2"
      >
        ノートを選択
      </button>

      {/* ④ onClick属性を追加し、showSelectionに
          'ボールペン'を渡して呼び出してください。 */}
      <button className="btn btn-outline-primary me-2"
      >
        ボールペンを選択
      </button>

      {/* ⑤ onClick属性を追加し、
          引数なしのclearSelection関数を指定してください。 */}
      <button className="btn btn-secondary"
      >
        選択を解除
      </button>
    </main>
  )
}
