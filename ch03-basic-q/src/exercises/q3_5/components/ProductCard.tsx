import { Link } from 'react-router'

type ProductCardProps = {
  id: number
  name: string
  price: number
  imagePath: string
}

export default function ProductCard(
  { id, name, price, imagePath }: ProductCardProps
) {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card h-100">
        <img
          src={imagePath}
          alt={name}
          className="card-img-top p-3"
          style={{ height: '180px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h2 className="h5 card-title">{name}</h2>
          <p className="card-text">商品番号：{id}</p>
          <p className="card-text">単価：{price}円</p>
          {/* ➂ 実装：/sample-3-5/products/ にidの値を続けたURLをテンプレートリテラルで組み立て、Linkのto属性に設定してください。次の仮のto属性を置き換えます。 */}
          <Link to="/sample-3-5/products"
                className="btn btn-primary">
            詳細
          </Link>
        </div>
      </div>
    </div>
  )
}
