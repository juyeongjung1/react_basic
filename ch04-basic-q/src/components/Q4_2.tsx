// ➀ 実装：axiosパッケージからaxiosをインポートしてください。

export default function Q4_2() {
  async function handleGetProducts() {
    // ➁ 実装：awaitとaxios.get()を使用して、/api/products へ
    // GETリクエストを送信し、レスポンスを定数responseに格納してください。

    // ➂ 実装：responseから商品一覧を取り出し、console.log()で
    // ブラウザーのコンソールに出力してください。
  }

  return (
    <main className="container mt-4">
      <h1>商品情報の取得</h1>
      <p>取得した商品情報は、ブラウザーのコンソールに表示されます。</p>
      <button type="button" className="btn btn-primary"
              onClick={handleGetProducts}>
        商品一覧を取得
      </button>
    </main>
  )
}
