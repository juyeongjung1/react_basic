import { useState } from 'react'

export default function Sample2_5() {
  const [stock, setStock] = useState(2)

  const purchaseOne = () => {
    if (stock > 0) {
      setStock(stock - 1)
    }
  }

  let stockMessage = ''
  if (stock > 0) {
    stockMessage = '在庫あり'
  } else {
    stockMessage = '在庫切れ'
  }

  return (
    <main className="container mt-4">
      <h1>商品の在庫確認</h1>
      <p>商品名：ノート</p>
      <p>在庫数：{stock}個</p>
      <p>在庫状況：{stockMessage}</p>

      <p className={stock > 0
        ? 'text-success fw-bold'
        : 'text-danger fw-bold'}>
        {stock > 0 ? '購入できます' : '在庫切れです'}
      </p>

      {stock === 1 && (
        <p className="text-warning fw-bold">残り1個です</p>
      )}

      <button
        className="btn btn-primary"
        onClick={purchaseOne}
        disabled={stock === 0}
      >
        1個購入
      </button>
    </main>
  )
}
