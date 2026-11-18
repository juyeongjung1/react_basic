#set text(font: "Meiryo UI", lang: "ja", size: 10pt, fill: rgb("172D42"))
#set par(leading: 4pt, first-line-indent: 0pt)

#let ink = rgb("172D42")
#let blue = rgb("264D73")
#let blue-tint = rgb("F0F5FA")
#let teal = rgb("17535B")
#let teal-tint = rgb("EEF6F6")
#let orange = rgb("934317")
#let orange-tint = rgb("FFF3E9")
#let border = rgb("B0C3D3")
#let orange-border = rgb("D8A47E")
#let red = rgb("BD302D")

#let at(x, y, body) = place(top + left, dx: x * 1pt, dy: y * 1pt, body)
#let plate(x, y, w, h, fill, stroke: none, radius: 4pt) = at(x, y,
  rect(width: w * 1pt, height: h * 1pt, fill: fill, stroke: stroke, radius: radius))
#let label(x, y, w, body, size: 10pt, weight: "regular", color: ink, position: left) = {
  at(x, y, box(width: w * 1pt, align(position, text(size: size, weight: weight, fill: color, body))))
}
#let mono(body, size: 11pt, color: ink, weight: "regular") = {
  text(font: "Courier New", size: size, fill: color, weight: weight, kerning: false, body)
}
#let arrow(x, y, width, color) = {
  plate(x, y, width - 6, 1.45, color, radius: 0pt)
  at(x + width - 7, y - 4.25, polygon((0pt, 0pt), (7pt, 5pt), (0pt, 10pt), fill: color))
}

#let folder(x, y, w, h) = {
  plate(x, y, w * 0.43, h * 0.32, rgb("CF8B36"), radius: 1.5pt)
  plate(x, y + 0.16 * h, w, 0.84 * h, rgb("F1BC62"), stroke: 0.8pt + rgb("A76425"), radius: 2.5pt)
}
#let sheet(x, y, w, h, color) = {
  plate(x, y, w, h, white, stroke: 0.85pt + color, radius: 1.7pt)
  plate(x + w * 0.20, y + h * 0.32, w * 0.60, 1.2, color, radius: 0.5pt)
  plate(x + w * 0.20, y + h * 0.56, w * 0.43, 1.2, color, radius: 0.5pt)
}
#let browser(x, y) = {
  plate(x, y, 56, 41, white, stroke: 1.1pt + teal, radius: 3pt)
  plate(x + 1.2, y + 1.2, 53.6, 9, teal, radius: 2pt)
  for offset in (5, 11, 17) {
    plate(x + offset, y + 4.4, 2.6, 2.6, white, radius: 1.3pt)
  }
  plate(x + 7, y + 17, 15, 17, rgb("A0D0CD"), radius: 1pt)
  plate(x + 27, y + 17, 21, 2.7, teal, radius: 1pt)
  plate(x + 27, y + 24, 20, 2.7, rgb("83A5AA"), radius: 1pt)
  plate(x + 27, y + 31, 14, 2.7, rgb("83A5AA"), radius: 1pt)
}
#let bundle(x, y) = {
  sheet(x + 10, y, 18, 24, blue)
  sheet(x + 27, y + 2, 18, 22, blue)
  at(x, y + 15, polygon((0pt, 6pt), (7pt, 0pt), (48pt, 0pt), (55pt, 6pt),
    fill: rgb("C9DBED"), stroke: 0.9pt + blue))
  plate(x, y + 21, 55, 22, rgb("D9E6F3"), stroke: 0.9pt + blue, radius: 2pt)
  plate(x + 21, y + 24, 13, 2.5, blue, radius: 1pt)
}

#let role-card(x, title, tool, detail, accent, tint, frame) = {
  plate(x, 29, 107, 183, tint, stroke: 0.8pt + frame, radius: 5pt)
  plate(x + 10.5, 124, 86, 19, white, stroke: 0.55pt + frame, radius: 3pt)
  label(x + 10.5, 129, 86, mono(tool, size: 10.4pt, color: accent, weight: "bold"), position: center)
  label(x, 151, 107, title, size: 12.1pt, weight: "bold", color: accent, position: center)
  label(x + 2, 166, 103, detail, size: 9.6pt, position: center)
}

#page(width: 352pt, height: 224pt, margin: 0pt, fill: white)[
  #role-card(4, [ひな形の作成], "create-vite", [React開発に必要な#linebreak()初期ファイルを#linebreak()一括作成する], orange, orange-tint, orange-border)
  #role-card(122, [開発サーバー], "Vite", [開発中の画面を#linebreak()ブラウザーで#linebreak()確認する], teal, teal-tint, border)
  #role-card(240, [本番用ビルド], "Vite", [アプリケーションを#linebreak()公開用のファイルに#linebreak()まとめる], blue, blue-tint, border)
  #plate(17, 13, 81, 22, orange, radius: 3pt)
  #label(17, 18, 81, [この節で学習], size: 10.5pt, color: white, weight: "bold", position: center)
  #folder(31, 70, 53, 35)
  #sheet(53, 66, 20, 26, orange)
  #sheet(44, 72, 19, 25, orange)
  #browser(147, 67)
  #bundle(266, 65)
]

#page(width: 380pt, height: 155pt, margin: 0pt, fill: white)[
  #plate(2, 5, 112, 116, blue-tint, stroke: 0.7pt + border)
  #label(13, 15, 90, [実行前], size: 10.1pt, weight: "bold", color: blue)
  #folder(38, 39, 40, 26)
  #label(2, 76, 112, mono("vite-demo", weight: "bold"), color: blue, position: center)
  #label(2, 97, 112, [空のフォルダー], position: center)
  #label(116, 44, 133, mono("create-vite", size: 12.5pt, color: orange, weight: "bold"), position: center)
  #arrow(120, 67, 124, orange)
  #label(116, 82, 133, [コマンドを実行], color: orange, position: center)
  #plate(250, 5, 128, 116, orange-tint, stroke: 0.7pt + orange-border)
  #label(261, 15, 103, [実行後], size: 10.1pt, weight: "bold", color: orange)
  #label(261, 35, 107, mono("vite-demo", weight: "bold"), color: orange)
  #folder(264, 55, 13, 9)
  #label(283, 53, 91, mono("src/"))
  #sheet(265, 74, 11, 12, blue)
  #label(283, 73, 91, mono("index.html"))
  #sheet(265, 94, 11, 12, blue)
  #label(283, 93, 91, mono("package.json"))
  #at(182, 99, line(length: 27pt, angle: 90deg, stroke: (paint: orange, thickness: 0.65pt, dash: "dashed")))
  #plate(7, 126, 366, 25, blue-tint, stroke: 0.7pt + border)
  #label(7, 132, 366, mono("npm create vite@8.0.0 . -- --template react-ts", size: 11pt), position: center)
]

#page(width: 380pt, height: 94pt, margin: 0pt, fill: white)[
  #let prefix = "npm create vite@8.0.0 "
  #let join = ". -- "
  #let template = "--template react-ts"
  #let code(body) = mono(body, size: 12pt)
  #plate(4, 5, 372, 35, blue-tint, stroke: 0.7pt + border)
  #at(20, 15, code(prefix + join + template))
  #context {
    let dot = 20 + measure(code(prefix)).width / 1pt
    let argument = 20 + measure(code(prefix + join)).width / 1pt
    let dot-width = measure(code(".")).width / 1pt
    let argument-width = measure(code(template)).width / 1pt
    plate(dot - 2, 12, dot-width + 4, 22, none, stroke: 1pt + red, radius: 2pt)
    plate(argument - 2, 12, argument-width + 4, 22, none, stroke: 1pt + red, radius: 2pt)
    at(dot + dot-width / 2, 34, line(end: (-88pt, 25pt), stroke: 0.8pt + red))
    at(argument + argument-width / 2, 34, line(end: (0pt, 25pt), stroke: 0.8pt + red))
  }
  #plate(4, 59, 172, 30, rgb("FFF1EE"), stroke: 0.7pt + red)
  #label(4, 66, 172, [現在のフォルダーに作成], size: 10.7pt, weight: "bold", position: center)
  #plate(194, 59, 182, 30, rgb("FFF1EE"), stroke: 0.7pt + red)
  #label(194, 66, 182, [React＋TypeScriptを指定], size: 10.7pt, weight: "bold", position: center)
]

#let file-card(x, name, description, accent, tint) = {
  plate(x, 6, 109, 91, tint, stroke: 0.7pt + border)
  sheet(x + 46, 16, 17, 22, accent)
  label(x, 47, 109, mono(name, size: 12pt, color: accent, weight: "bold"), position: center)
  label(x + 5, 67, 99, description, size: 10.1pt, position: center)
}
#page(width: 380pt, height: 103pt, margin: 0pt, fill: white)[
  #file-card(1, "App.tsx", [実際に表示する#linebreak()画面の内容], blue, blue-tint)
  #arrow(112.6, 46, 20, blue)
  #file-card(135, "main.tsx", [Reactの画面を#linebreak()HTMLにつなぐ], teal, teal-tint)
  #arrow(246.6, 46, 20, teal)
  #file-card(269, "index.html", [画面を表示する場所], teal, teal-tint)
]
