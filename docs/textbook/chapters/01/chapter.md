:::: {#page-1 .source-page}

::: {#ch01-number .paragraph}
1
:::

::: {#ch01-title .heading}
第1章 React の開発環境と動作確認
:::

::: {#ch01-goals .heading}
章の目標
:::

::: {#ch01-goal-setup .paragraph}
◼ React の開発環境を準備し、Vite でひな形を作成できる
:::

::: {#ch01-goal-files .paragraph}
◼ VS Code の NPM スクリプトから配布サンプルを起動できる
:::

::: {#ch01-goal-types .paragraph}
◼ サンプルの主要なファイルのつながりを説明できる
:::

::::

:::: {#page-2 .source-page}

::: {#ch01-spa-title .heading}
1.1. ReactとSPA
:::

::: {#ch01-spa-slide .slide layout="illustration"}
ReactとSPA

![同じ数量追加操作を行うJavaScriptとReactの比較](assets/slide-react-spa.png)
:::

::: {#ch01-spa-background .heading level="minor"}
Reactが必要になった背景
:::

::: {#ch01-spa-interface-update .paragraph}
Webアプリケーションでは、ボタンのクリックやフォームへの入力など、ユーザーの操作に応じて画面の表示を変更する必要があります。
:::

::: {#ch01-spa-note-example .paragraph}
例えば、ショッピングサイトで商品の数量を1個から2個に変更すると、合計金額も250円から500円に変わります。このような画面を、従来のJavaScriptで実装する場合を考えてみましょう。
:::

::: {#ch01-spa-js-process .paragraph}
従来のJavaScriptでは、主に次の処理をプログラムで記述します。
:::

::: {#ch01-spa-js-step-1 .paragraph numbered="true"}
1．HTMLから更新対象の要素を取得する
:::

::: {#ch01-spa-js-step-2 .paragraph numbered="true"}
2．ボタンのクリックなどのイベントを登録する
:::

::: {#ch01-spa-js-step-3 .paragraph numbered="true"}
3．データ（商品の数量）を変更する
:::

::: {#ch01-spa-js-step-4 .paragraph numbered="true"}
4．HTMLの表示内容（数量と合計金額）を書き換える
:::

::::

:::: {#page-3 .source-page}

::: {#ch01-spa-js-example .paragraph}
**従来のJavaScriptによる実装例**
:::

::: {#ch01-spa-counter .code filename="ch01-setup/examples/counter.html" highlight-lines="21-22"}
```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>商品の数量変更</title>
</head>
<body>
  <h2>商品：ノート（1個250円）</h2>
  <p>数量：<span id="quantity">1</span>個</p>
  <p>合計：<span id="total">250</span>円</p>
  <button id="add">1個追加</button>

  <script>
    const price = 250
    let quantity = 1
    const quantityEl = document.getElementById('quantity')
    const totalEl = document.getElementById('total')

    document.getElementById('add').addEventListener('click', () => {
      quantity += 1
      quantityEl.textContent = String(quantity)
      totalEl.textContent = String(price * quantity)
    })
  </script>
</body>
</html>
```
:::

![［1個追加］を1回押したときの数量と合計金額](assets/quantity-change.png){#ch01-spa-js-result}

::: {#ch01-spa-js-result-caption .paragraph}
［1個追加］を1回押したときの数量と合計金額
:::

::: {#ch01-spa-js-code-reading .paragraph}
このコードでは、`getElementById()` で表示を書き換える場所を取得し、`addEventListener()` でボタンのクリック処理を登録しています。そして、クリックするたびに `quantity` を1増やし、`textContent` を使って数量と合計金額の表示をそれぞれ書き換えています。
:::

::::

:::: {#page-4 .source-page}

::: {#ch01-spa-dom-maintenance .paragraph}
この方法でもWebアプリケーションは開発できます。しかし、商品の小計、送料、在庫数など、画面内で連動する表示が増えるほど、**どのHTML要素を、いつ書き換えるか**を管理する処理が複雑になります。
:::

::: {#ch01-spa-react .heading level="minor"}
Reactとは
:::

::: {#ch01-spa-react-definition .paragraph}
React（リアクト）は、Webアプリケーションの画面（UI）を効率よく作成するための**JavaScriptライブラリ**です。
:::

::: {#ch01-spa-react-data .paragraph}
Reactでは、**画面に表示するデータを管理し、そのデータが変更されたときにReactが必要な画面の更新を行う**という考え方で開発します。
:::

::: {#ch01-spa-react-example-intro .paragraph}
先ほどの「ノートの数量を1個増やす」処理を、Reactで記述すると次のようになります。
:::

::: {#ch01-spa-react-example .paragraph}
**Reactによる実装例**
:::

::: {#ch01-react-counter .code filename="ch01-setup/examples/Counter.tsx"}
```tsx
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
```
:::

![［1個追加］を1回押したときの数量と合計金額](assets/quantity-change.png){#ch01-spa-react-result}

::: {#ch01-spa-react-result-caption .paragraph}
［1個追加］を1回押したときの数量と合計金額
:::

::::

:::: {#page-5 .source-page}

::: {#ch01-spa-react-quantity .paragraph}
このコードでは、`useState(1)` を使って数量の初期値を1にしています。ボタンをクリックすると、`setQuantity(quantity + 1)` が数量を更新します。
:::

::: {#ch01-spa-react-display .paragraph}
Reactはデータが更新されたことを受けて、画面に必要な変更を反映します。そのため、JavaScript版で記述していた `getElementById()` や `textContent` による**表示先の取得・書き換えを、自分で記述する必要がありません**。
:::

::: {#ch01-spa-react-total .paragraph}
また、合計金額は `{price * quantity}` と書くだけで、最新の数量に応じた値を表示できます。
:::

::: {#ch01-spa-react-next-chapter .paragraph}
※ `useState` や `onClick`、HTMLに似た記述方法（JSX）の詳しい書き方は、第2章で学習します。ここでは、**「データが変わると、その結果が画面に反映される」**というReactの考え方を抑えてください。
:::

::: {#ch01-spa-react-components .paragraph}
Reactには、画面を「コンポーネント」という部品に分けて作成し、組み合わせたり再利用したりできる特徴もあります。例えば、商品カードや検索フォームを独立した部品として管理できます。この考え方についても、後続の章で扱います。
:::

::: {#ch01-spa-related-title .paragraph}
**【参考】フロントエンド開発で使われる主な技術**
:::

::: {#ch01-spa-related-table .comparison icons="assets/reactive-display.svg assets/template-binding.svg assets/application-routing.svg"}
| React | Vue.js | Angular |
| --- | --- | --- |
| Metaが開発する画面（UI）用のライブラリ。3つの中で最も多く使われた（Stack Overflow 2026年調査）。 | Evan Youの個人開発から始まったフレームワーク。HTMLに近い書き方で学びやすい。 | Googleが開発するフレームワーク。前身のAngularJSは、初期のフロントエンドフレームワークの一つ。 |
:::

::: {#ch01-spa-react-history .paragraph}
Reactは2013年に公開され、2019年にはHooksと呼ばれる仕組みが追加されました。今回使った `useState` もHooksの一つです。また、Reactを基盤としたフレームワークにはNext.jsなどがあります。
:::

::::

:::: {#page-6 .source-page}

::: {#ch01-spa-definition .heading level="minor"}
SPAとは
:::

::: {#ch01-spa-spa-definition-body .paragraph}
SPA（Single Page Application：シングルページアプリケーション）とは、**画面を切り替えるたびにHTMLページ全体を再読み込みするのではなく、必要な部分を更新して表示する**Webアプリケーションの方式です。
:::

::: {#ch01-spa-product-pages .paragraph}
例えば、商品管理システムに「商品一覧画面」と「商品詳細画面」があるとします。
:::

::: {#ch01-spa-traditional-pages .paragraph}
**従来のWebページの構成**では、商品一覧から商品詳細へ移動するときに、サーバーから別のHTMLページを取得し、ページ全体を読み込み直す方式が一般的でした。
:::

::: {#ch01-spa-spa-pages .paragraph}
一方、**SPA**では、最初に読み込んだHTMLを土台として、ヘッダーやメニューなどの共通部分を維持しながら、商品一覧と商品詳細に相当する部分を切り替えることができます。
:::

![商品一覧から商品詳細への切り替え](assets/spa-navigation-comparison.png){#ch01-spa-routing-figure}

::: {#ch01-spa-routing-figure-caption .paragraph}
商品一覧から商品詳細への切り替え
:::

::: {#ch01-spa-spa-communication .paragraph}
なお、SPAでも、商品情報をサーバーから取得するための通信は行われます。違いは「通信するかどうか」ではなく、**画面を切り替えるときにページ全体を再読み込みするか、必要な表示部分を更新するか**という点です。
:::

::::

:::: {#page-7 .source-page}

::: {#ch01-spa-react-spa-distinction .paragraph}
Reactは、このようなSPAの画面を構築するためにも利用できます。ただし、**ReactとSPAは同じ意味ではありません。**
:::

::: {#ch01-spa-list-1-1 .paragraph}
● **React**：画面を作成・更新するためのライブラリ
:::

::: {#ch01-spa-list-1-2 .paragraph}
● **SPA**：Webアプリケーションの画面切り替えの方式
:::

::: {#ch01-spa-router-course .paragraph}
本研修では、Reactによる画面表示や入力処理を学習した後、第3章でReact Routerを使い、URLに応じて画面を切り替えるSPAを実装します。
:::

::: {#ch01-spa-key-points .section-points}
この節のポイント

● 従来のJavaScriptでは、表示するデータとHTMLの書き換えを自分で管理する必要がある。

● Reactでは、データの変更に合わせて必要な画面の更新をReactが行う。

● SPAは、ページ全体を再読み込みせず、必要な部分を更新して画面を切り替える方式である。

● Reactはライブラリ、SPAはアプリケーションの構成方式であり、同じ意味ではない。
:::

::::

:::: {#page-8 .source-page}

::: {#ch01-tools-title .heading}
1.2. 開発環境の準備
:::

::: {#ch01-tools-slide .slide layout="diagram" art="assets/slide-environment.png"}
開発環境の準備

章フォルダー<br>
配布サンプルを<br>章ごとに置く

VS Code<br>
複数の章フォルダーを<br>まとめて開く

Node.js・npm<br>
バージョンを<br>ターミナルで確認する
:::

::: {#ch01-tools-body-title .heading level="minor"}
React の環境構築のための準備
:::

::: {#ch01-tools-body .paragraph}
本章は **Windows** で操作します。React の開発を始める前に、次の準備を行います。
:::

::: {#ch01-tools-folders .paragraph numbered="true"}
①　**章フォルダーを用意します。** 親フォルダーの下に章ごとのサンプルを置きます。
:::

::: {#ch01-tools-editor .paragraph numbered="true"}
②　**VS Code のワークスペースを作ります。** インターネットから Windows 用の Visual Studio Code をダウンロードしてインストールし、章フォルダーを追加します。
:::

::: {#ch01-tools-language .paragraph numbered="true"}
③　**言語機能を確認します。** VS Code に組み込まれた入力補完とエラー表示の機能を確認します。
:::

::: {#ch01-tools-node .paragraph numbered="true"}
④　**Node.js を導入します。** インターネットから Node.js 24 系をダウンロードしてインストールし、Node.js と npm のバージョンを確認します。
:::

::::

:::: {#page-9 .source-page}

::: {#ch01-folder-title .heading}
**【作業手順①】　親フォルダーと章フォルダーを作る**
:::

::: {#ch01-folder-open .paragraph numbered="true"}
1．Windows の［エクスプローラー］を開き、`C:\` を表示します。
:::

::: {#ch01-folder-parent .paragraph numbered="true"}
2．`work` フォルダーがなければ［新規作成］→［フォルダー］で作ります。`work` を開き、その中に `react_basic` を作ります。
:::

::: {#ch01-folder-path .paragraph keep-lines="true"}
親フォルダーの例　`C:\work\react_basic`
:::

::: {#ch01-folder-extract .paragraph numbered="true"}
3．`react_basic` の下に、章ごとのフォルダーを用意します。第1章は **`ch01-setup`** です。配布物が ZIP 形式の場合は右クリックして［すべて展開］を選び、展開した章フォルダーを親フォルダーの下に置きます。ファイルのみが配布された場合は、`ch01-setup` を作成して、その中にファイルを入れます。
:::

::: {#ch01-folder-structure .table}
| 場所 | その直下にあるもの |
| --- | --- |
| `C:\work\react_basic` | `ch01-setup` |
| `C:\work\react_basic\ch01-setup` | `package.json`、`package-lock.json`、`src` |
:::

![エクスプローラーでch01-setupを開いてsrc、package.json、package-lock.jsonを確かめる画面](assets/explorer-chapter-files.png){#ch01-folder-files}

::: {#ch01-folder-files-caption .paragraph}
`ch01-setup` の直下にある主なファイルとフォルダー
:::

::: {#ch01-folder-check .paragraph}
第2章以降も、配布されたフォルダーを同じ親フォルダーの下に置きます。章ごとに分けると、各章のコードと依存ライブラリを別々に管理できます。`C:\work` に作成できない場合は、書き込みができる場所に親フォルダーを用意してください。
:::

::::

:::: {#page-10 .source-page}

::: {#ch01-workspace-title .heading}
**【作業手順②】　VS Code でマルチルート・ワークスペースを作る**
:::

::: {#ch01-workspace-intro .paragraph}
**マルチルート・ワークスペース**は、複数のフォルダーを一つの VS Code ウィンドウにまとめて開く仕組みです。研修では章ごとのフォルダーを登録します。
:::

::: {#ch01-workspace-start .paragraph numbered="true"}
1．インターネットから Windows 用の **Visual Studio Code（VS Code）** のインストーラーをダウンロードして実行します。インストール済みの場合は VS Code を起動します。
:::

::: {#ch01-workspace-add .paragraph numbered="true"}
2．［ファイル］→［フォルダーをワークスペースに追加］を選び、`C:\work\react_basic\ch01-setup` を追加します。配布済みの章フォルダーがほかにもある場合は、同じ操作で追加します。
:::

![VS Codeのファイルメニューから章フォルダーを追加し、ワークスペースを保存する操作](assets/vscode-workspace-menu.png){#ch01-workspace-menu}

::: {#ch01-workspace-menu-caption .paragraph}
章フォルダーをワークスペースへ追加するメニュー
:::

::: {#ch01-workspace-save .paragraph numbered="true"}
3．［ファイル］→［名前を付けてワークスペースを保存］を選びます。親フォルダーに **`react-basic.code-workspace`** という名前で保存します。
:::

::: {#ch01-workspace-path .paragraph keep-lines="true"}
保存先の例　`C:\work\react_basic\react-basic.code-workspace`
:::

::::

:::: {#page-11 .source-page}

::: {#ch01-workspace-reopen .paragraph numbered="true"}
4．次回は［ファイル］→［ファイルでワークスペースを開く］で `react-basic.code-workspace` を選びます。VS Code のエクスプローラーに、登録した章フォルダーが並びます。
:::

![VS Codeで保存したワークスペースを開くと章フォルダーが並んでいる画面](assets/vscode-workspace-roots.png){#ch01-workspace-roots}

::: {#ch01-workspace-roots-caption .paragraph}
第2章のフォルダーを追加したワークスペースの例
:::

::: {#ch01-workspace-more .paragraph}
新しい章のサンプルが配布されたら、同じ親フォルダーに配置し、このワークスペースに追加して保存します。
:::

::: {#ch01-language-title .heading}
**【作業手順③】　VS Code の言語機能を確認する**
:::

::: {#ch01-language-intro .paragraph}
React の `.tsx` ファイルを編集するときの入力補完やエラー表示には、VS Code に組み込まれた言語機能を使います。
:::

::: {#ch01-language-search .paragraph numbered="true"}
1．左の［拡張機能］を開き、検索欄に `@builtin typescript` と入力します。
:::

::: {#ch01-language-check .paragraph numbered="true"}
2．一覧から **［JavaScript と TypeScript の言語機能］** を開きます。［無効にする］が表示されたら、機能は有効です。
:::

![拡張機能の一覧からVS Code組み込みのJavaScriptとTypeScriptの言語機能を確認する画面](assets/vscode-typescript-feature.png){#ch01-typescript-feature}

::: {#ch01-typescript-feature-caption .paragraph}
VS Code に組み込まれた JavaScript と TypeScript の言語機能
:::

::::

:::: {#page-12 .source-page}

::: {#ch01-node-title .heading}
**【作業手順④】　Node.js をインストールしてターミナルを開く**
:::

::: {#ch01-node-intro .paragraph}
次の節で使う Vite などの開発ツールは **Node.js** 上で動きます。Node.js をインストールすると、ライブラリの導入に使う **npm** も利用できるようになります。
:::

::: {#ch01-node-install .paragraph numbered="true"}
1．インターネットから **Node.js 24 系**の Windows 用インストーラー（`.msi`）をダウンロードします。ダウンロードしたファイルを開き、画面の案内に従ってインストールします。
:::

::: {#ch01-terminal-open .paragraph numbered="true"}
2．VS Code を起動し直し、保存した `react-basic.code-workspace` を開きます。［ターミナル］→［新しいターミナル］を選び、フォルダーの選択が表示されたら **`ch01-setup`** を選びます。
:::

![新しいターミナルの作業フォルダーからch01-setupを選ぶ画面](assets/vscode-workspace-terminal.png){#ch01-workspace-terminal}

::: {#ch01-workspace-terminal-caption .paragraph}
新しいターミナルを開く章フォルダーを選択
:::

::: {#ch01-node-terminal-note .paragraph}
画面下部の**ターミナル**にコマンドを入力します。コマンドは選んだ章フォルダーで実行されます。ウィンドウの幅が狭い場合、［ターミナル］は［…］の中にあります。
:::

::::

:::: {#page-13 .source-page}

::: {#ch01-terminal-title .heading level="minor"}
Node.js と npm のバージョンを確認する
:::

::: {#ch01-terminal-prompt .paragraph numbered="true"}
3．PowerShell のターミナルでは、`PS …>` が入力待ちの**プロンプト**です。`>` の直前のフォルダー名が `ch01-setup` であることを確かめます。次のコマンドを1行ずつ入力して［Enter］を押します。
:::

::: {#ch01-tools-code .code}
```powershell
node -v
npm -v
```
:::

![VS CodeのターミナルでNode.jsとnpmのバージョンを確認した画面](assets/vscode-node-versions.png){#ch01-terminal-versions}

::: {#ch01-terminal-versions-caption .paragraph}
各コマンドの実行結果としてバージョン番号が表示される
:::

::: {#ch01-tools-check .paragraph numbered="true"}
4．`node -v` の結果が `v24.` で始まり、`npm -v` の結果にバージョン番号が表示されることを確かめます。`node` が認識されない場合は、インストールが完了していることを確かめて VS Code を起動し直します。
:::

::: {#ch01-tools-npm-ps .paragraph}
PowerShell で `npm.ps1` の実行が制限されている場合は、**`npm.cmd -v`** を実行します。同じメッセージが出る場合は、以降もコマンドの先頭の `npm` を `npm.cmd` に置き換えます。
:::

::::

:::: {#page-14 .source-page}

::: {#ch01-vite-title .heading}
1.3. Vite でプロジェクトを作成
:::

::: {#ch01-vite-slide .slide layout="diagram" art="assets/slide-vite-project.png"}
Vite でプロジェクトを作成

ひな形の作成<br>
空のフォルダーに<br>初期ファイルを作る

開発サーバー<br>
開発中の画面を<br>ブラウザーで確認する

本番用ビルド<br>
公開用のファイルを<br>まとめる
:::

::: {#ch01-vite-definition .heading level="minor"}
Vite とは
:::

::: {#ch01-vite-course .paragraph}
**Vite**（ヴィート）は、Web アプリケーションの**開発サーバー**と**本番用ビルド**の機能を備えたツールです。新しく開発を始めるときは、Vite のひな形作成ツール **create-vite** で、React の初期ファイルと設定をまとめて用意できます。
:::

::: {#ch01-vite-body-title .heading}
**【作業手順①】　Vite でプロジェクトを作成する**
:::

::: {#ch01-vite-folder .paragraph}
`C:\work\react_basic` の下に、空の **`vite-demo`** フォルダーを作ります。VS Code の［ファイル］→［新しいウィンドウ］を選び、そのウィンドウで `vite-demo` を開きます。
:::

::: {#ch01-vite-action .paragraph numbered="true"}
1．［ターミナル］→［新しいターミナル］を選び、プロンプトの末尾が `vite-demo>` であることを確認します。次のコマンドを1行で入力して［Enter］を押します。
:::

::: {#ch01-vite-code .code}
```powershell
npm create vite@8.0.0 . -- --template react-ts
```
:::

::: {#ch01-vite-command-args .paragraph}
`.`（ドット）は**現在のフォルダー**、`--template react-ts` は作成する React の**ひな形**を指定します。
:::

::::

:::: {#page-15 .source-page}

::: {#ch01-vite-prompts-title .heading level="minor"}
作成時に表示されるメッセージを確認する
:::

::: {#ch01-vite-pin .paragraph}
本書では、選択画面と生成されるファイルをそろえるため、ひな形を作成するツールのバージョンを **create-vite 8.0.0** に固定します。
:::

::: {#ch01-vite-confirm .paragraph numbered="true"}
2．`Ok to proceed? (y)` が表示された場合は、`create-vite@8.0.0` の表示を確認し、**`y`** を入力して［Enter］を押します。
:::

::: {#ch01-vite-confirm-result .code}
```text
Need to install the following packages:
create-vite@8.0.0
Ok to proceed? (y)
```
:::

::: {#ch01-vite-rolldown .paragraph numbered="true"}
3．`Use rolldown-vite (Experimental)?:` が表示されたら、**`No`** を選んで［Enter］を押します。
:::

::: {#ch01-vite-rolldown-result .code}
```text
Use rolldown-vite (Experimental)?:
    Yes
  > No
```
:::

::: {#ch01-vite-immediate .paragraph numbered="true"}
4．`Install with npm and start now?` が表示されたら、方向キーで **`No`** を選んで［Enter］を押します。ここではひな形を作成するところまで確認します。
:::

::: {#ch01-vite-immediate-result .code}
```text
Install with npm and start now?
  Yes / > No
```
:::

::: {#ch01-vite-done .paragraph}
`Done. Now run:` と表示され、プロンプトが戻れば作成は完了です。
:::

::: {#ch01-vite-done-result .code}
```text
Done. Now run:

  npm install
  npm run dev
```
:::

::: {#ch01-vite-not-empty .paragraph}
※既存ファイルがあるというメッセージが表示された場合は、`Cancel operation` を選び、空の `vite-demo` フォルダーを開いてから実行します。
:::

::::

:::: {#page-16 .source-page}

::: {#ch01-vite-files-title .heading}
**【作業手順②】　生成されたプロジェクトの初期ファイルを確認する**
:::

::: {#ch01-vite-show-files .paragraph numbered="true"}
1．VS Code 左側の［エクスプローラー］を開きます。`vite-demo` に **`package.json`**、**`index.html`**、**`vite.config.ts`**、`tsconfig.json`、**`src` フォルダー**が表示されることを確かめます。
:::

![Viteで生成したReactプロジェクトの初期ファイル](assets/vscode-vite-tree.png){#ch01-vite-tree}

::: {#ch01-vite-tree-caption .paragraph}
VS Code のエクスプローラーで確認する React の初期ファイル
:::

::: {#ch01-vite-file-roles .paragraph}
`index.html` はブラウザーが最初に読み込むファイルです。画面のコードは `src` にあり、実行するコマンドや利用するライブラリは `package.json` に記載されています。
:::

::: {#ch01-vite-back .paragraph numbered="true"}
2．確認したら、`vite-demo` を開いたウィンドウを閉じ、1.2 節で保存した `react-basic.code-workspace` に戻ります。以降は、配布サンプルの **`ch01-setup`** で商品管理システムを起動します。
:::

::::

:::: {#page-17 .source-page}

::: {#ch01-install-title .heading}
1.4. 依存ライブラリの導入
:::

::: {#ch01-install-slide .slide layout="diagram" art="assets/slide-npm-install.png"}
依存ライブラリの導入

`package.json`<br>
必要なライブラリを<br>記載する

`npm install`<br>
ライブラリを取得する

`node_modules`<br>
取得したライブラリが<br>ここに入る
:::

::: {#ch01-install-body-title .heading level="minor"}
配布サンプルの依存ライブラリをインストールする
:::

::: {#ch01-install-body .paragraph}
`package.json` にはサンプルが使う**依存ライブラリ**が記載されています。npm は `package-lock.json` のバージョン情報を参照し、必要なファイルを取得します。
:::

::: {#ch01-install-action .paragraph numbered="true"}
1．作業場所が `ch01-setup` であることを確認し、**`npm install`** を実行します。ファイルの取得中は、そのままプロンプトが戻るまで待ちます。
:::

![配布サンプルでnpm installを実行したターミナル](assets/vscode-npm-install.png){#ch01-install-result}

::: {#ch01-install-result-caption .paragraph}
初回の実行例。`added` の行に追加件数が表示され、入力待ちに戻る
:::

::: {#ch01-install-check .paragraph numbered="true"}
2．エクスプローラーで **`node_modules`** ができたことを確認します。次の章も、その章の `package.json` があるフォルダーで `npm install` を実行します。
:::

::::

:::: {#page-18 .source-page}

::: {#ch01-start-title .heading}
1.5. 開発サーバーの起動と動作確認
:::

::: {#ch01-start-slide .slide layout="diagram" art="assets/slide-dev-server.png"}
開発サーバーの起動と動作確認

NPM スクリプト<br>
`dev` の実行ボタンを押す

開発サーバー<br>
`Local` の URL を<br>ターミナルで確認する

ブラウザー<br>
URL を開いて<br>商品管理画面を表示する
:::

::: {#ch01-start-intro-title .heading level="minor"}
React のサンプルを手元の PC で起動する
:::

::: {#ch01-start-intro .paragraph}
React の画面を手元の PC で確認するときは、Vite の**開発サーバー**を起動します。VS Code の **［Npm スクリプト］** には、`package.json` に登録された実行コマンドが表示されます。
:::

::: {#ch01-start-sidebar .heading}
**【作業手順①】　VS Code で NPM スクリプトを表示する**
:::

::: {#ch01-start-menu .paragraph numbered="true"}
1．VS Code の［エクスプローラー］を開き、見出しの右にある **［…］** をクリックします。表示されたメニューで **［Npm スクリプト］** を選び、チェックを付けます。
:::

![エクスプローラーのメニューでNPMスクリプトを表示する](assets/vscode-npm-panel-menu.png){#ch01-npm-menu}

::: {#ch01-npm-menu-caption .paragraph}
エクスプローラーの［…］メニューにある［Npm スクリプト］
:::

::::

:::: {#page-19 .source-page}

::: {#ch01-start-run-title .heading}
**【作業手順②】　開発サーバーを起動する**
:::

::: {#ch01-start-run .paragraph numbered="true"}
1．エクスプローラーの下にある［Npm スクリプト］を開きます。章が並ぶ場合は `ch01-setup` を選び、`package.json` の項目を展開します。`dev` の行にマウスポインターを合わせ、右端の **［▷］（実行）** をクリックします。
:::

![NPMスクリプトのdev行に表示される実行ボタン](assets/vscode-npm-dev.png){#ch01-npm-dev}

::: {#ch01-npm-dev-caption .paragraph}
`dev` の行の右端に表示される実行ボタン
:::

::: {#ch01-start-location .paragraph numbered="true"}
2．VS Code の画面下部にターミナルが開きます。**`Local` の行に表示された URL** をコピーし、ブラウザーのアドレスバーに貼り付けて［Enter］を押します。
:::

![Viteを起動しLocalのURLが表示されたターミナル](assets/vscode-vite-server.png){#ch01-start-terminal}

::: {#ch01-start-terminal-caption .paragraph}
`Local` の行に表示されたアドレスをブラウザーで開く
:::

::: {#ch01-start-running .paragraph}
確認中は開発サーバーを動かしておきます。コマンドで操作する場合は、`ch01-setup` のターミナルで `npm run dev` を実行しても同じように起動できます。
:::

::::

:::: {#page-20 .source-page}

::: {#ch01-start-verify-title .heading}
**【作業手順③】　商品データを変更して表示を確認する**
:::

::: {#ch01-start-verify .paragraph numbered="true"}
1．ブラウザーに「商品管理システム」と表示され、商品名が「ノート」、価格が「250 円」であることを確認します。
:::

::: {#ch01-start-edit .paragraph numbered="true"}
2．VS Code のエクスプローラーで［src］を展開し、［product.ts］を開きます。商品名を表す **`name`** の値を `'ノート'` から `'ノート１'` に変更し、［Ctrl］＋［S］で保存します。
:::

::: {#ch01-product-update-code .code filename="ch01-setup/src/product.ts"}
```typescript
export const product = {
  id: 1,
  name: 'ノート１',
  price: 250,
  category: '文具',
}
```
:::

::: {#ch01-start-check .paragraph numbered="true"}
3．ブラウザーに戻り、「商品名」が **「ノート１」** に変わったことを確認します。Vite の開発サーバーは保存を検知し、ブラウザーに変更を反映します。
:::

![変更した商品データが商品名欄に反映されたブラウザー画面](assets/product-data-updated.png){#ch01-product-update-screen}

::: {#ch01-product-update-caption .paragraph}
商品名の欄に、変更後の「ノート１」が表示された画面
:::

::: {#ch01-product-update-restore .paragraph}
React の画面を組み立てる `App.tsx` は、`product.name` を読み取って「商品名」の欄に表示します。確認後は、`product.ts` の `name` を `'ノート'` に戻して保存します。
:::

::: {#ch01-start-stop .paragraph numbered="true"}
4．Vite を起動したターミナルで［Ctrl］＋［C］を押します。終了の確認が出た場合は `Y` を入力して［Enter］を押します。プロンプトが表示されれば停止しています。
:::

::::

:::: {#page-21 .source-page}

::: {#ch01-files-title .heading}
1.6. フォルダーと主要ファイルの役割
:::

::: {#ch01-files-slide .slide layout="diagram" art="assets/slide-source-files.png"}
フォルダーと主要ファイルの役割

`index.html`<br>
画面を表示する<br>場所を用意する

`main.tsx`<br>
`App` を HTML に<br>描画する

`App.tsx`<br>
`product.ts` のデータを<br>画面に表示する
:::

::: {#ch01-index-title .heading level="minor"}
ブラウザーが最初に読み込む index.html
:::

::: {#ch01-index-body .paragraph}
配布サンプル `ch01-setup` の `index.html` を開きます。9行目の **`<div id="root">`** は、React の画面を表示する場所です。10行目の `script` 要素で、画面表示を始める **`src/main.tsx`** を読み込みます。
:::

::: {#ch01-index-code .code filename="ch01-setup/index.html"}
```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>商品管理システム</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
:::

::::

:::: {#page-22 .source-page}

::: {#ch01-main-title .heading level="minor"}
画面の表示を始める main.tsx
:::

::: {#ch01-main-body .paragraph}
`src/main.tsx` の2行目は、画面を組み立てる **`App`** を読み込みます。5行目は `index.html` にある `id="root"` の要素を取得します。7行目の `render(<App />)` で、その場所に `App` の内容を表示します。
:::

::: {#ch01-main-code .code filename="ch01-setup/src/main.tsx"}
```tsx
import { createRoot } from 'react-dom/client'
import App from './App'
import './style.css'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}
```
:::

::: {#ch01-product-title .heading level="minor"}
商品1件のデータを用意する product.ts
:::

::: {#ch01-product-body .paragraph}
`src/product.ts` には、商品名、価格、カテゴリなどをまとめた**商品データ**が入っています。`export` を付けた **`product`** は、次ページの `App.tsx` から読み込めます。
:::

::: {#ch01-product-code .code filename="ch01-setup/src/product.ts"}
```javascript
export const product = {
  id: 1,
  name: 'ノート',
  price: 250,
  category: '文具',
}
```
:::

::::

:::: {#page-23 .source-page}

::: {#ch01-app-title .heading level="minor"}
商品管理の画面を組み立てる App.tsx
:::

::: {#ch01-app-body .paragraph}
`src/App.tsx` の1行目は、`product.ts` の商品データを読み込みます。5行目からの HTML に似た記述を **JSX** と呼びます。6行目がページの見出しです。11行目の **`{product.name}`** により、画面の「商品名」の欄に「ノート」が表示されます。価格とカテゴリも同じ商品データから読み取ります。
:::

::: {#ch01-app-code .code filename="ch01-setup/src/App.tsx"}
```tsx
import { product } from './product'

export default function App() {
  return (
    <main>
      <h1>商品管理システム</h1>
      <p>第1章の動作確認</p>
      <dl aria-label="サンプル商品">
        <div>
          <dt>商品名</dt>
          <dd>{product.name}</dd>
        </div>
        <div>
          <dt>価格</dt>
          <dd>{product.price.toLocaleString('ja-JP')} 円</dd>
        </div>
        <div>
          <dt>カテゴリ</dt>
          <dd>{product.category}</dd>
        </div>
      </dl>
    </main>
  )
}
```
:::

::::

:::: {#page-24 .source-page}

::: {#ch01-summary-title .heading}
章のまとめ
:::

::: {#ch01-summary-slide .slide layout="summary"}
章のまとめ

■ 開発環境の準備とViteによるプロジェクト作成

■ 章ごとの依存ライブラリの導入

■ NPMスクリプトによる開発サーバーの起動と動作確認

■ ブラウザーによるファイルの読み込みと商品データの表示
:::

::: {#ch01-summary-body .paragraph}
この章では、React の開発環境を準備し、Vite でひな形を作成しました。配布サンプルを VS Code の NPM スクリプトから起動し、商品管理システムが表示されることを確かめました。第2章では、商品を一覧に表示し、フォームの入力値を扱います。
:::

::::
