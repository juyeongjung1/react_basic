# 教材のMarkdown・PDF組版

『Spring Boot入門』で使用したトレノケート教材の書式を、React教材にも適用するための組版一式です。移植元はSpring Boot教材の `587a857` です。

最初に [見本のMarkdown](docs/textbook/chapters/sample/chapter.md) を生成してください。章扉、本文と小見出し、JSX・TSX、コードの読み方、表、スライドの上下配置、図番号を4ページで確認できます。

## 表紙から第2章の2.6節までを Markdown から組版する

[表紙・前付の原稿](docs/textbook/chapters/front/chapter.md)、[第1章の原稿](docs/textbook/chapters/01/chapter.md)、[第2章の原稿](docs/textbook/chapters/02/chapter.md) を合冊します。下記の「見本を生成する」と同じ環境を用意し、次のコマンドで `output/pdf/textbook/textbook/flow.pdf` を生成します。

```powershell
.\.venv\Scripts\python.exe tools/textbook/build_all.py --collection textbook --mode flow
```

表紙と前付の順序・体裁は『Vue.js 入門』講義テキスト（260901 Ver3）の1〜12ページを参照しています。目次は前付原稿の3ページに記述します。各項目の参照先をブロックIDで指定すると、合冊時にページ番号とPDF内リンクが反映されます。9ページのコースの位置付けは、参照元の図形と同じ配置で SPA 開発入門までを示し、その下に Vue.js と React の講座を並べます。

各節の先頭に `.heading`、その直後に `.slide` を置きます。最初の段落がスライドのタイトルです。ロゴ、外枠、上下の罫線はトレノケートの共通書式に固定しています。`layout="diagram" art="assets/図版.png"` は3場面の図を配置します。続く3段落に図の左から順に項目名と説明を書き、`<br>` で区切ります。`layout="columns"` は段落を上から並べます。コースの目標・概要と章のまとめは、Vue 版に合わせて白地に文字と記号で組みます。

第1章だけを確認するときは、`.\.venv\Scripts\python.exe tools/textbook/build.py --chapter 01 --mode flow` で組版できます。

受講者は [第1章の配布サンプル](ch01-setup)、第2章の [完成サンプル](ch02-basic) と [確認演習の穴埋め版](ch02-basic-q) を使用します。各プロジェクトの `package.json` があるフォルダーで `npm install` を実行し、VS CodeのNPMスクリプトで `dev` を実行します。ターミナルから起動する場合は `npm run dev` を使います。

第2章は、どちらのプロジェクトでもブラウザーのメニューから2.1〜2.6を選択できます。確認演習では、テキストで指定された [穴埋めファイル](ch02-basic-q/src/components) を開き、「確認」の番号では指定されたコードを読み、「実装」の番号では該当箇所を編集します。

2.5以降の確認演習も、2.4の `onClick` と同様に、その節で学ぶ属性や式を受講者が一式記述する難易度を基本とします。画面構成や学習対象外の処理は実装済みとし、編集箇所は直前の番号付きコメントで示します。「➀ 確認」「➁ 実装」のように区別し、使う値や操作を「～してください」の形で示します。配布時点で起動できる形にします。教材には、対象ファイルを開いて番号付きコメントに沿って進める手順と、動作確認の方法を記載します。

## 1. 見本を生成する

WindowsでPython 3.12、Pandoc、Node.js 20以上、Microsoft Edgeを使います。Python 3.12、Pandoc 3.9.0.2、Node.js 24で確認しました。フォントはWindowsのMS P明朝、MS Pゴシック、メイリオなどを使います。

Python 3.12を `python` で起動できる状態で、リポジトリのルートから実行します。

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r tools/textbook/requirements.txt
npm.cmd ci --prefix tools/textbook

.\.venv\Scripts\python.exe tools/textbook/build.py --chapter sample --mode flow
```

生成した `output/pdf/textbook/chapter-sample/chapter-flow.pdf` を開きます。同じフォルダーの `checks.json` に文字照合・改ページ検査の結果、`output/html/textbook/sample.html` にコード・表・コード解説のプレビューが出ます。見本を編集して再生成する場合は同じコマンドを実行します。

## 2. React教材の原本を取り込む

1. Word原稿と、同じ原稿をWordから書き出したPDFを用意します。Word内の埋め込みスライドとPDF上の座標を対応させるため、同じ版を使います。
2. `docs/textbook/chapters/02` など、取り込み先として未使用のフォルダーを作ります。[章設定のひな形](docs/textbook/templates/source.json) を `source.json` として置き、`pdf` と `word` を実際のパスに、`first_page` と `last_page` を元PDFの物理ページに合わせます。章扉、奥付、前付など元位置で維持するページは `cover_mode` と `native_pages` で指定します。`cover_mode` は章扉を原本から再現する `native`、見本と同じ章扉を組む `classic`、章扉のない `none` が使えます。
3. 図版・表の候補を抽出し、原本を見て切り出し範囲を確認します。スライドと説明の境界、赤枠・吹き出しの端、スライド上の表と本文表の区別を特に確認します。`slide` に埋め込みファイル名がある図は、表示用SVGと編集用の埋め込みファイルが保存されます。
4. 確認済みの `source.json` から取り込みます。`chapter.md` が編集用原稿、`baseline.md` が取り込み時の原稿、`source-layout.json` と `assets/` が原本から取得した座標・書式・図版です。

```powershell
.\.venv\Scripts\python.exe tools/textbook/discover.py --chapter 02
# 図版・表の候補を原本と照合して source.json を確定する
.\.venv\Scripts\python.exe tools/textbook/import_source.py --chapter 02
.\.venv\Scripts\python.exe tools/textbook/build.py --chapter 02 --mode all
```

初回の `--mode all` で元位置再現版、原本と並べた比較版、自動組版版が作られます。文章を直した後は `--mode flow` で自動組版版を更新します。取り込みをやり直す場合は別の章フォルダーで試してください。`--force` は編集済み原稿を取り込み結果で上書きします。

## 3. Markdownで書式を指定する

見本と同じPandocの区切りを使います。各ページを `.source-page` と `page-数字` で示し、その中の段落・見出し・コード・表には一意のIDを付けます。

| 要素 | 指定と確認 |
| --- | --- |
| 本文・強調 | `.paragraph`。通常段落の一字下げは組版側で行います。部分強調は `**太字**`。出典から引き継いだ `.sNNN` は `source-layout.json` の書式を参照します。 |
| 見出し | `.heading`。操作のまとまりが1つの節では、操作名をそのまま見出しにします。元の章・節の開始位置と、次の段落との間隔を比較します。 |
| 小小見出し | `.heading level="minor"`。Wordと同じMS Pゴシックの12pt・太字で組み、前の段落の下に26ptの余白を取ります。 |
| コード | `.code filename="ch01-setup/src/App.tsx"` の中に言語付きコードフェンス。ファイルの一部を抜粋するときは、最終版の実ファイルと照合し、たとえば `start-line="9"` と指定します。赤枠の `highlight-lines="9-9"` も実際の行番号で指定します。実ファイルに対応しない記述例は `example="true"` と指定し、行番号を省きます。ソースは文字として組版し、右上には `react_basic` を起点にした相対パスを表示します。 |
| コードの読み方 | `tools/textbook/code_explanations.json` に見本の1件があります。対象コードIDと行番号、元の説明段落IDを対応させます。`source_texts` は原稿と同じ文字列、`source_fragments` の `start`・`end` はその文字列中の範囲です。 |
| 表 | `.table` の中にMarkdownのパイプ表。見出しは中央、データは左に置き、短い表は内容に合わせて幅を絞ります。元の色と強調、外周線とセル罫線をPDFで確認します。 |
| この節のポイント | `.section-points` の中に見出し「この節のポイント」と、`●` で始まる項目を空行で区切って書きます。見出しと項目をまとめて、専用の枠に組みます。 |
| 補足 | `.training-note` の最初の段落を「【補足】localhostとは」の形式で書きます。補足は教材共通の専用枠に組みます。 |
| ブラウザーの表示結果 | 見出し、余白、背景、アドレスバーなどをHTMLや図形で表現し、表示内容と色を実際の動作と照合します。概念図は図形とベクター文字で組み、スクリーンショットは実画面の提示が必要な場合に使用します。 |
| スライド・図 | 画像のIDを原本から取り出した図版と対応させます。スライドは上段を固定し、説明文を下へ組みます。独立図には図番号と枠が付きます。PNGの挿絵と説明文を同じ枠に入れる例では、章設定の `illustrations` に図IDと `caption_id` を指定します。ソースコードを示す図には `file_path` で相対パスを指定し、図の右上に表示します。 |

章内の改ページは原本の開始位置を基準にします。このため、原本由来の前付・章扉・PPT・操作画面をそろえるには、**React教材から取り出した** `source-layout.json` と `assets/` が必要です。見本の座標は、見本の4ページを生成するための設定です。

図版の左右端、スライドと本文の重なり、見出しの孤立、コードの途中欠け、表の線と色を、代表ページをPDF画像にして確認してください。元の版との比較には同じ紙面位置を並べた `comparison.pdf` を使えます。

## 4. 合冊・印刷・索引

原本を取り込んだ教材を合冊する場合は、[合冊設定のひな形](docs/textbook/templates/collections.json) をもとに `docs/textbook/collections.json` を設定します。章順、元PDFの目次ページ、索引と印刷位置は実際の教材に合わせます。章の元ページ範囲は、合計で元PDFの全ページを順番に覆うように指定します。

```powershell
.\.venv\Scripts\python.exe tools/textbook/build_all.py --collection textbook
```

`print_layout` を使う場合は「はじめに」と奥付の原稿アンカーを指定します。章・付録と索引を奇数ページから始め、奥付を最終の偶数ページに配置します。索引を作る場合は、[索引原稿のひな形](docs/textbook/templates/index.md) で用語と「章ID:ブロックID」を対応させます。目次と索引の番号・PDF内リンクは合冊時に確定します。

## 別の教材へ持っていくファイル

| コピーする場所 | 役割 |
| --- | --- |
| [tools/textbook](tools/textbook/) | 組版ツール一式。主な書式は `book.typ`、`components.css`、`code.tmTheme`、`index.typ`。取り込み・検査・合冊のPythonスクリプトとEdgeレンダラー、依存関係ファイルもここにあります。 |
| [docs/textbook/chapters/sample](docs/textbook/chapters/sample/) | 動作確認用のMarkdown・書式と座標の設定・図版。 |
| [docs/textbook/templates](docs/textbook/templates/) | 新しい教材で書き始める章設定、合冊設定、索引原稿。 |
| [README.md](README.md) | セットアップと編集手順。 |

プロジェクト直下からの相対パスを参照するため、ディレクトリ構成も一緒にコピーします。教材ごとの `chapter.md`、`source.json`、`source-layout.json`、`assets/` は、各教材の原本に合わせて作ります。コード解説と画像ファイル名の対応表も、利用する教材のブロックIDを登録します。
