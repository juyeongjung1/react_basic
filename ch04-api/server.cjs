const express = require('express')
const app = express()

const products = [
  { id: 101, name: 'ノート', price: 250,
    imagePath: '/images/products/notebook.svg' },
  { id: 102, name: 'ボールペン', price: 120,
    imagePath: '/images/products/ballpoint-pen.svg' },
  { id: 103, name: '消しゴム', price: 100,
    imagePath: '/images/products/eraser.svg' },
  { id: 104, name: 'ファイル', price: 600,
    imagePath: '/images/products/file-folder.svg' },
  { id: 105, name: 'クリップ', price: 180,
    imagePath: '/images/products/paper-clips.svg' },
  { id: 106, name: '付箋', price: 240,
    imagePath: '/images/products/sticky-notes.svg' }
]

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(
    (product) => String(product.id) === req.params.id
  )
  if (!product) {
    res.status(404).json({ message: '商品が見つかりません。' })
    return
  }
  res.json(product)
})

app.listen(3000, '127.0.0.1', () => {
  console.log('REST API: http://127.0.0.1:3000')
})
