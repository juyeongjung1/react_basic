import ProductCardQ from './ProductCardQ'

export default function Q3_1() {
  // ➀ 確認：productsに6件の商品データが定義されていることと、
  // 下のmap()で1件につき1枚のProductCardQを生成していることを確認してください。
  const products = [
    { id: 104, name: 'ファイル', price: 600, imagePath: '/images/products/file-folder.svg' },
    { id: 105, name: 'クリップ', price: 180, imagePath: '/images/products/paper-clips.svg' },
    { id: 106, name: '付箋', price: 240, imagePath: '/images/products/sticky-notes.svg' },
    { id: 101, name: 'ノート', price: 250, imagePath: '/images/products/notebook.svg' },
    { id: 102, name: 'ボールペン', price: 120, imagePath: '/images/products/ballpoint-pen.svg' },
    { id: 103, name: '消しゴム', price: 100, imagePath: '/images/products/eraser.svg' }
  ]

  return (
    <main className="container mt-4">
      <h1>商品一覧</h1>

      <div className="row g-3">
        {products.map((product) => (
          // ➄ 実装：次のProductCardQにname・price・imagePathのPropsを指定してください。
          // productの同名のプロパティの値を渡し、カードごとに対応する商品情報を表示してください。
          <ProductCardQ key={product.id} />
        ))}
      </div>
    </main>
  )
}
