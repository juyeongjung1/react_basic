// ① 確認：関数コンポーネントの宣言と、画面を返す return の位置を確認する。
export default function Q2_1() {
  const systemName = '社員管理システム'
  const guideMessage = '社員情報を確認できます。'

  return (
    <main className="container mt-4">
      {/* ② 実装：見出しの「未設定」を {systemName} に置き換える。 */}
      <h1>未設定</h1>
      {/* ③ 実装：案内文の「未設定」を {guideMessage} に置き換える。 */}
      <p>未設定</p>
    </main>
  )
}
