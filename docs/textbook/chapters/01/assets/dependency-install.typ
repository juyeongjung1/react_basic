#import "vite-project.typ": arrow, at, blue, blue-tint, border, label, mono, orange, orange-border, orange-tint, plate, sheet, teal, teal-tint

#set text(font: "Meiryo UI", lang: "ja", size: 10pt, fill: rgb("172D42"))
#set par(leading: 3.3pt, first-line-indent: 0pt)

#let card(x, color, tint, frame, name, role, detail) = {
  plate(x, 43, 102, 162, tint, stroke: 0.7pt + frame, radius: 5pt)
  label(x, 119, 102, mono(name, size: 12.3pt, color: color, weight: "bold"), position: center)
  label(x, 143, 102, role, size: 11.5pt, weight: "bold", color: color, position: center)
  label(x + 4, 167, 94, detail, size: 9.7pt, position: center)
}
#let cart(x, y) = {
  sheet(x + 22, y, 23, 33, blue)
  at(x + 6, y + 16, polygon((0pt, 0pt), (52pt, 0pt), (45pt, 18pt), (6pt, 18pt),
    fill: rgb("CCE0F0"), stroke: 1.1pt + blue))
  at(x - 2, y + 11, line(end: (10pt, 6pt), stroke: 1.2pt + blue))
  plate(x + 17, y + 35, 6, 6, blue, radius: 3pt)
  plate(x + 37, y + 35, 6, 6, blue, radius: 3pt)
}
#let order-button(x, y) = {
  plate(x, y, 68, 30, orange, radius: 5pt)
  label(x, y + 7, 68, [注文する], size: 11.3pt, weight: "bold", color: white, position: center)
  at(x + 51, y + 21, polygon((0pt, 0pt), (18pt, 9pt), (9pt, 11pt), (7pt, 18pt),
    fill: white, stroke: 1pt + orange))
}
#let parcel(x, y) = {
  at(x, y, polygon((0pt, 11pt), (10pt, 0pt), (53pt, 0pt), (62pt, 11pt),
    fill: rgb("F4D4A1"), stroke: 0.9pt + rgb("9D642C")))
  plate(x, y + 11, 62, 30, rgb("EBB970"), stroke: 0.9pt + rgb("9D642C"), radius: 2pt)
  plate(x + 27, y + 2, 9, 9, rgb("CD8A44"), radius: 0pt)
  plate(x + 27, y + 11.6, 9, 12, rgb("CD8A44"), radius: 0pt)
  plate(x + 42, y + 26, 13, 7, white, stroke: 0.45pt + rgb("9D642C"), radius: 1pt)
}

#page(width: 352pt, height: 224pt, margin: 0pt, fill: white)[
  #label(3, 14, 346, [npmをショッピングサイトに例えると], size: 12.2pt,
    weight: "bold", color: blue, position: center)
  #card(2, blue, blue-tint, border, "package.json", [注文書],
    [必要なライブラリが#linebreak()記載されている])
  #card(125, orange, orange-tint, orange-border, "npm install", [注文する],
    [ライブラリを#linebreak()インターネットから取得])
  #card(248, teal, teal-tint, border, "node_modules", [商品が届く場所],
    [ダウンロードされた#linebreak()ライブラリを保管])
  #cart(25, 61)
  #order-button(142, 68)
  #parcel(268, 62)
  #arrow(107, 85, 15, blue)
  #arrow(230, 85, 15, teal)
]
