import ProductCard from '../components/ProductCard'

export default function ProductListPage() {
  const products = [
    { id: 201, name: 'ファイル', price: 600, imagePath: '/images/products/file-folder.svg' },
    { id: 202, name: 'クリップ', price: 180, imagePath: '/images/products/paper-clips.svg' },
    { id: 203, name: '付箋', price: 240, imagePath: '/images/products/sticky-notes.svg' },
    { id: 204, name: 'ノート', price: 250, imagePath: '/images/products/notebook.svg' },
    { id: 205, name: 'ボールペン', price: 120, imagePath: '/images/products/ballpoint-pen.svg' },
    { id: 206, name: '消しゴム', price: 100, imagePath: '/images/products/eraser.svg' }
  ]

  return (
    <main className="container mt-4">
      <h1>商品一覧</h1>

      <div className="row g-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imagePath={product.imagePath}
          />
        ))}
      </div>
    </main>
  )
}
