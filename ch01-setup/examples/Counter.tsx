import { useState } from 'react'

export default function Counter() {
  const price = 250
  const [quantity, setQuantity] = useState(1)

  return (
    <main>
      <h2>商品：ノート（1個250円）</h2>
      <p>数量：{quantity}個</p>
      <p>合計：{price * quantity}円</p>
      <button onClick={() => setQuantity(quantity + 1)}>
        1個追加
      </button>
    </main>
  )
}
