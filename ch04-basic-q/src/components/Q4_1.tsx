// ➀ 実装：axiosパッケージからaxiosをインポートしてください。

export default function Q4_1() {
  async function handleGetProduct() {
    // ➁ 実装：awaitとaxios.get()を使用して、/api/products/104 へ
    // GETリクエストを送信し、レスポンスを定数responseに格納してください。

    // ➂ 実装：responseから商品情報を取り出し、console.log()で
    // ブラウザーのコンソールに出力してください。
  }

  return (
    <main className="container mt-4">
      <h1>商品情報の取得</h1>
      <p>商品番号104の商品情報を取得します。取得結果は、ブラウザーのコンソールに表示されます。</p>
      <button type="button" className="btn btn-primary"
              onClick={handleGetProduct}>
        商品情報を取得
      </button>
    </main>
  )
}
