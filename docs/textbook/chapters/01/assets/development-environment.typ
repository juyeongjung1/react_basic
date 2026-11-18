#set text(font: "Meiryo UI", lang: "ja", size: 10pt, fill: rgb("172D42"))
#set par(leading: 3pt, first-line-indent: 0pt)

#let ink = rgb("172D42")
#let muted = rgb("435468")
#let blue = rgb("264D73")
#let teal = rgb("17535B")
#let orange = rgb("934317")
#let blue-tint = rgb("F0F5FA")
#let teal-tint = rgb("EEF6F6")
#let orange-tint = rgb("FFF3E9")
#let border = rgb("BAC8D3")

#let at(x, y, body) = place(top + left, dx: x * 1pt, dy: y * 1pt, body)
#let plate(x, y, w, h, fill, stroke: none, radius: 4pt) = at(x, y,
  rect(width: w * 1pt, height: h * 1pt, fill: fill, stroke: stroke, radius: radius))
#let label(x, y, w, body, size: 10pt, weight: "regular", color: ink, position: left) = at(x, y,
  box(width: w * 1pt, align(position, text(size: size, weight: weight, fill: color, body))))

#let tool-card(x, y, title, role, icon, color, tint) = {
  plate(x, y, 166, 94, tint, stroke: 0.65pt + border)
  plate(x + 12, y + 25, 36, 36, color, radius: 7pt)
  at(x + 12, y + 25, icon)
  label(x + 58, y + 23, 103, title, size: 12.5pt, weight: "bold", color: color)
  label(x + 58, y + 46, 101, role, size: 10pt)
}
#let editor = [
  #plate(7, 8, 22, 21, none, stroke: 1pt + white, radius: 1.5pt)
  #label(7, 11, 22, raw("</>"), size: 10pt, position: center, color: white)
]
#let terminal = [
  #plate(7, 10, 22, 16, none, stroke: 1pt + white, radius: 1.5pt)
  #label(8, 11, 20, raw(">_"), size: 10pt, position: center, color: white)
]
#let package = [
  #plate(9, 10, 18, 17, none, stroke: 1pt + white, radius: 1.5pt)
  #plate(9, 10, 18, 5, white, radius: 1pt)
  #plate(15, 19, 6, 1.2, white, radius: 0pt)
]
#let browser = [
  #plate(7, 9, 22, 18, none, stroke: 1pt + white, radius: 1.5pt)
  #plate(7, 9, 22, 5, white, radius: 1pt)
  #plate(10, 10.8, 1.4, 1.4, teal, radius: 0.7pt)
  #plate(13.5, 10.8, 1.4, 1.4, teal, radius: 0.7pt)
]

#page(width: 352pt, height: 224pt, margin: 0pt, fill: white)[
  #tool-card(4, 11, [VS Code], [ソースコードの\ 作成・編集], editor, blue, blue-tint)
  #tool-card(182, 11, [Node.js], [開発ツールの\ 実行], terminal, teal, teal-tint)
  #tool-card(4, 118, [npm], [ライブラリの\ インストール・管理], package, orange, orange-tint)
  #tool-card(182, 118, [Webブラウザー], [画面の動作確認], browser, teal, teal-tint)
]

#let workflow-card(x, title, body, color, tint) = {
  plate(x, 8, 110, 69, tint, stroke: 0.65pt + border)
  label(x, 17, 110, title, size: 12pt, weight: "bold", color: color, position: center)
  label(x + 4, 40, 102, body, size: 10.6pt, position: center)
}
#let arrow(x) = {
  plate(x, 41, 16, 1.2, blue, radius: 0pt)
  at(x + 13, 38, polygon((0pt, 0pt), (5pt, 3.6pt), (0pt, 7.2pt), fill: blue))
}

#page(width: 380pt, height: 149pt, margin: 0pt, fill: white)[
  #workflow-card(1, [VS Code], [TSXを編集], blue, blue-tint)
  #arrow(113.5)
  #workflow-card(135, [Node.js上のVite], [JavaScriptに変換し\ 開発用に配信], teal, teal-tint)
  #arrow(247.5)
  #workflow-card(269, [Webブラウザー], [Reactの画面を表示], teal, teal-tint)
  #at(190, 81, line(length: 17pt, angle: 90deg, stroke: (paint: orange, thickness: 1pt, dash: "dashed")))
  #at(187, 77, polygon((0pt, 5pt), (3pt, 0pt), (6pt, 5pt), fill: orange))
  #plate(91, 99, 198, 43, orange-tint, stroke: 0.65pt + rgb("D8A47E"))
  #label(91, 104, 198, [npm], size: 11pt, weight: "bold", color: orange, position: center)
  #label(91, 121, 198, [Reactなどのライブラリを用意・管理], size: 10.2pt, position: center)
]

#let folder-icon(x, y) = {
  plate(x, y, 7, 3, rgb("C98629"), radius: 0.8pt)
  plate(x, y + 2, 13, 8, rgb("E4A64C"), radius: 1pt)
}

#page(width: 380pt, height: 202pt, margin: 0pt, fill: white)[
  #plate(1, 2, 378, 198, white, stroke: 0.65pt + border)
  #plate(2, 3, 376, 20, rgb("EAF0F6"))
  #folder-icon(12, 7)
  #label(34, 5, 336, raw("C:\\work\\react_basic"), size: 11pt, weight: "bold", color: blue)

  #plate(7, 27, 366, 94, blue-tint, stroke: 0.55pt + border)
  #folder-icon(14, 35)
  #label(33, 31, 85, [ch01-setup], size: 12pt, weight: "bold", color: blue)
  #label(15, 54, 99, [配布済みのサンプル], size: 10pt, weight: "bold")
  #label(15, 78, 99, [1.4節で\ 依存ライブラリを導入], size: 9.5pt, color: muted)
  #at(116, 30, image("explorer-chapter-files.png", width: 248pt))
  #label(220, 37, 132, [ファイルは配布物に含まれる], size: 9.8pt, weight: "bold", color: blue, position: right)

  #plate(7, 127, 366, 67, orange-tint, stroke: 0.55pt + rgb("D8A47E"))
  #folder-icon(14, 136)
  #label(33, 132, 85, [vite-demo], size: 12pt, weight: "bold", color: orange)
  #label(15, 154, 96, [1.3節で作る\ 別の空フォルダー], size: 10pt, weight: "bold")
  #plate(115, 135, 0.65, 51, rgb("D8A47E"), radius: 0pt)
  #label(126, 132, 237, [#raw("create-vite") でひな形を生成], size: 9.6pt, color: muted)
  #label(126, 146, 237, [#raw("src")、#raw("index.html")、#raw("package.json")], size: 10.4pt, weight: "bold")
  #label(126, 164, 237, [#raw("npm install") の実行後に作成], size: 9.6pt, color: muted)
  #label(126, 178, 237, [#raw("node_modules")、#raw("package-lock.json")], size: 10.4pt, weight: "bold")
]
