#set text(font: "Meiryo UI", lang: "ja", fill: rgb("172D42"), size: 10pt)
#set par(leading: 1.4pt, spacing: 0pt, first-line-indent: 0pt)

#let blue = rgb("164D5A")
#let light-blue = rgb("EDF6F7")
#let blue-border = rgb("A2C2C9")
#let orange = rgb("A95022")
#let light-orange = rgb("FFF3E9")
#let orange-border = rgb("E1B89C")
#let ink = rgb("172D42")

#let at(x, y, body) = place(top + left, dx: x * 1pt, dy: y * 1pt, body)
#let plate(x, y, w, h, fill, stroke: none, radius: 3pt) = at(x, y,
  rect(width: w * 1pt, height: h * 1pt, fill: fill, stroke: stroke, radius: radius))
#let label(x, y, w, body, size: 10pt, weight: "regular", color: ink) = at(x, y,
  box(width: w * 1pt, align(center, text(size: size, weight: weight, fill: color, body))))
#let down(x, y, color, height: 7) = {
  at(x, y, line(start: (0pt, 0pt), end: (0pt, (height - 3) * 1pt), stroke: 0.9pt + color))
  at(x - 2.8, y + height - 3.5, polygon((0pt, 0pt), (5.6pt, 0pt), (2.8pt, 3.5pt), fill: color))
}

#let process-column(x, title, main, surface, border, preparation, update, render-step, highlight, highlight-text) = {
  plate(x, 29, 165, 163, surface, stroke: 0.65pt + border)
  plate(x, 29, 165, 20, main)
  label(x, 32, 165, title, size: 11.6pt, weight: "bold", color: white)
  plate(x + 7, 54, 151, 17, white, stroke: 0.5pt + border)
  label(x + 7, 57, 151, preparation, size: 8.6pt, color: main)
  plate(x + 7, 75, 151, 17, white, stroke: 0.55pt + border)
  label(x + 7, 77.2, 151, [［1個追加］クリック], weight: "bold", size: 9.8pt)
  down(x + 82.5, 92.5, main)
  plate(x + 7, 101, 151, 17, white, stroke: 0.55pt + border)
  label(x + 7, 103.3, 151, update, size: 9.4pt)
  down(x + 82.5, 118.5, main)
  plate(x + 7, 127, 151, 29, highlight, stroke: 0.7pt + border)
  label(x + 7, 129.2, 151, render-step, size: 9.8pt, color: highlight-text)
  down(x + 82.5, 156.5, main)
  plate(x + 7, 165, 151, 21, main)
  label(x + 7, 169.2, 151, [表示更新　数量2個／合計500円], color: white, size: 9.15pt, weight: "bold")
}

#page(width: 352pt, height: 224pt, margin: 0pt, fill: white)[
  #plate(4, 2, 344, 21, rgb("F4F6F8"), stroke: 0.6pt + rgb("CCD6DF"))
  #label(4, 5, 344, [商品：ノート（1個250円）　数量1個／合計250円], size: 10.8pt, weight: "bold")
  #process-column(4, [従来のJavaScript], orange, light-orange, orange-border,
    [準備　更新対象のHTML要素を取得], [JavaScriptで数量を変更],
    [#text(weight: "bold")[textContent]で数量・合計金額\ を書き換え], rgb("FFE3C7"), rgb("803B20"))
  #process-column(183, [React], blue, light-blue, blue-border,
    [準備　useState(1)で初期数量を設定], [#text(weight: "bold")[setQuantity()] で数量を変更],
    [Reactが必要な表示を更新], rgb("CDEDE8"), rgb("104940"))
  #plate(4, 197, 344, 24, rgb("F4F6F8"), stroke: 0.6pt + rgb("CCD6DF"))
  #label(9, 198, 334, [違いは、画面のどこを書き換えるかを\ 開発者が逐一指定するかどうか],
    size: 9pt, weight: "bold")
]
