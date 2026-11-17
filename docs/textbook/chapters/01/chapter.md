:::: {#page-1 .source-page}

::: {#ch01-number .paragraph}
1
:::

::: {#ch01-title .heading}
第1章 開発環境とTypeScriptの基礎
:::

::: {#ch01-goals .heading}
章の目標
:::

::: {#ch01-goal-setup .paragraph}
◼ Viteを使い、ReactとTypeScriptのサンプルを起動できる
:::

::: {#ch01-goal-files .paragraph}
◼ 主要ファイルの役割を説明できる
:::

::: {#ch01-goal-types .paragraph}
◼ TypeScriptでレコードと配列の型を定義できる
:::

::::

:::: {#page-2 .source-page}

::: {#ch01-spa-title .heading}
1.1. React と SPA
:::

::: {#ch01-spa-slide .slide layout="columns"}
React と SPA

1995年<br>
JavaScript が登場し、ボタンの操作や入力に応じて画面を変えられるようになりました。

2000年代<br>
Ajax が広まり、ページを読み込み直さずにサーバーのデータを取得できるようになりました。

画面更新の課題<br>
表示する項目が増えると、データが変わるたびにどこを書き換えるかの管理が難しくなります。

2013年以降<br>
Facebook が React を公開。2019年には Hooks が加わりました。
:::

::: {#ch01-spa-react .heading}
**動的な画面更新の必要性と課題**
:::

::: {#ch01-spa-body .paragraph}
Web アプリケーションでは、操作や通信の結果に応じて画面を更新します。従来は、JavaScript で **DOM**（ドキュメントオブジェクトモデル）を直接操作して実装していました。次の例では、［カウントアップ］を押すたびに表示する数値を 1 増やします。
:::

::: {#ch01-spa-counter .code filename="counter.html"}
```html
<!doctype html>
<meta charset="utf-8">
<h1 id="count">0</h1>
<button id="btn">カウントアップ</button>
<script>
  let count = 0; // 初期値
  const countEl = document.getElementById("count");
  const btnEl = document.getElementById("btn");
  btnEl.addEventListener("click", function () {
    count++;
    countEl.textContent = count; // 表示を書き換える
  });
</script>
```
:::

::::

:::: {#page-3 .source-page}

::: {#ch01-spa-behavior .paragraph}
14ページの7・8行目で要素を読み込み時に取得し、9行目でクリック時の処理を登録します。10・11行目で `count` を増やし、`textContent` で見出しを書き換えます。表示する項目が増えるほど、どの処理がどの要素を更新するかを追いにくくなります。
:::

::: {#ch01-spa-frameworks-title .heading}
**フロントエンドフレームワークの登場**
:::

::: {#ch01-spa-frameworks-body .paragraph}
データに応じて表示を更新する仕組みを使うと、表示と処理を**コンポーネント**（画面の部品）にまとめて再利用できます。この仕組みは、同じページ内で画面を切り替える **SPA** の構築にも使われます。
:::

::: {#ch01-spa-frameworks .comparison icons="assets/reactive-display.svg assets/application-routing.svg assets/template-binding.svg"}
| React | Angular | Vue.js |
| --- | --- | --- |
| Facebook（現 Meta）が開発した、画面を作るためのライブラリです。 | Google が開発し、フォームや画面遷移の機能を備えています。 | Evan You が開発を始め、HTML に近いテンプレートで画面を記述します。 |
:::

::: {#ch01-react-counter .code filename="Counter.tsx"}
```tsx
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        カウントアップ
      </button>
    </>
  )
}
```
:::

::: {#ch01-react-counter-reading .paragraph keep-lines="true"}
①　4行目　**`useState(0)`** は、初期値 0 の `count` と更新用の `setCount` を返します。<br>
②　8行目　クリックすると **`setCount(count + 1)`** が次の値を React に渡します。<br>
③　7行目　React が `Counter` を再実行し、見出しに新しい `count` を表示します。<br>
14ページの `textContent` への代入にあたる表示の更新は、React が行います。
:::

::: {#ch01-react-history-title .heading}
**Reactの歴史と進化**
:::

::: {#ch01-react-history-release .paragraph}
2013年に Facebook が React を公開し、2019年の React 16.8 で **Hooks** が加わりました。`useState` も Hooks の一つです。第2章ではフォームの入力値を管理します。
:::

::: {#ch01-react-history-next .paragraph}
**Next.js** は React でアプリを作るフレームワークです。URL に応じた画面の切り替えや、サーバー側での表示の組み立てを扱います。
:::

::::

:::: {#page-4 .source-page}

::: {#ch01-tools-title .heading}
1.2. 開発環境の準備
:::

::: {#ch01-tools-slide .slide layout="columns"}
開発環境の準備

章フォルダー<br>
配布サンプルを章ごとに配置します。

ワークスペース<br>
VS Codeで章フォルダーをまとめて開きます。

言語機能<br>
組み込みの TypeScript と JavaScript の機能を確認します。

Node.js・npm<br>
開発ツールを動かす環境を整えます。
:::

::: {#ch01-tools-body-title .heading}
**React の環境構築のための準備**
:::

::: {#ch01-tools-body .paragraph}
本章は **Windows** で操作します。React と TypeScript の開発を始める前に、次の準備を行います。
:::

::: {#ch01-tools-folders .paragraph numbered="true"}
①　**章フォルダーを用意します。** 親フォルダーの下に章ごとのサンプルを置きます。
:::

::: {#ch01-tools-editor .paragraph numbered="true"}
②　**VS Code のワークスペースを作ります。** インターネットから Windows 用の Visual Studio Code をダウンロードしてインストールし、章フォルダーを追加します。
:::

::: {#ch01-tools-language .paragraph numbered="true"}
③　**言語機能を確認します。** VS Code に組み込まれた TypeScript と JavaScript の機能を確認します。
:::

::: {#ch01-tools-node .paragraph numbered="true"}
④　**Node.js を導入します。** インターネットから Node.js 24 系をダウンロードしてインストールし、Node.js と npm のバージョンを確認します。
:::

::::

:::: {#page-5 .source-page}

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

:::: {#page-6 .source-page}

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
章フォルダーの追加とワークスペースの保存に使うメニュー
:::

::: {#ch01-workspace-save .paragraph numbered="true"}
3．［ファイル］→［名前を付けてワークスペースを保存］を選びます。親フォルダーに **`react-basic.code-workspace`** という名前で保存します。
:::

::: {#ch01-workspace-path .paragraph keep-lines="true"}
保存先の例　`C:\work\react_basic\react-basic.code-workspace`
:::

::::

:::: {#page-7 .source-page}

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
React と TypeScript を組み合わせた `.tsx` ファイルの入力補完とエラー表示には、VS Code に組み込まれた言語機能を使います。
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

:::: {#page-8 .source-page}

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

:::: {#page-9 .source-page}

::: {#ch01-terminal-title .heading}
**Node.js と npm のバージョンを確認する**
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

:::: {#page-10 .source-page}

::: {#ch01-vite-title .heading}
1.3. Vite でプロジェクトを作成
:::

::: {#ch01-vite-slide .slide layout="columns"}
Vite でプロジェクトを作成

Vite<br>
開発サーバーの起動と、配布用のファイルを作るビルドを行うツールです。

ひな形<br>
React と TypeScript に必要なファイルや設定をまとめて用意できます。

研修での作業<br>
設定済みの `ch01-setup` を使います。次の 1.4 節で準備を続けます。
:::

::: {#ch01-vite-course .paragraph}
**Vite**（ヴィート）は、React と TypeScript の開発を支えるツールです。開発中は、**開発サーバー**を起動して、編集中の画面をブラウザーで確認できます。公開時には、アプリに必要なファイルを配布用にまとめる**ビルド**を実行します。
:::

::: {#ch01-vite-template .paragraph}
プロジェクトを新しく作るときは、React と TypeScript 用のひな形から始められます。ひな形には、最初の画面を表示するコードと、Vite、TypeScript、npm を使うための設定が含まれます。
:::

::: {#ch01-vite-next .paragraph}
研修では、配布済みの `ch01-setup` を使います。ワークスペースの `ch01-setup` を作業場所とし、**1.4 節「依存ライブラリの導入」**へ進んでください。新規作成の手順は次ページに示します。
:::

::::

:::: {#page-11 .source-page}

::: {#ch01-vite-body-title .heading}
**【参考】　React と TypeScript のプロジェクトを作成する**
:::

::: {#ch01-vite-action .paragraph numbered="true"}
1．空の作業フォルダーを用意し、VS Code で開きます。そのフォルダーのターミナルで、次のコマンドを1行で実行します。
:::

::: {#ch01-vite-code .code}
```powershell
npm create vite@7.1.3 demo -- --template react-ts
```
:::

::: {#ch01-vite-command-args .paragraph}
`demo` は新しく作るフォルダー名です。`--template react-ts` で React と TypeScript のひな形を指定します。
:::

::: {#ch01-vite-check .paragraph numbered="true"}
2．作成ツールのインストールを確認するメッセージが出た場合は、`y` を入力して［Enter］を押します。`Done` が表示されたら、`demo` の中に `package.json` と `src` ができたことを確認します。
:::

![create-viteの実行が完了したターミナル](assets/vscode-vite-create.png){#ch01-vite-result}

::: {#ch01-vite-result-caption .paragraph}
ひな形の作成が完了し、次に実行するコマンドが表示された状態
:::

::: {#ch01-vite-result-action .paragraph numbered="true"}
3．新規プロジェクトを起動するには、`cd demo` で作業場所を移動します。`npm install` で依存ライブラリを導入し、`npm run dev` で開発サーバーを起動します。
:::

::::

:::: {#page-12 .source-page}

::: {#ch01-install-title .heading}
1.4. 依存ライブラリの導入
:::

::: {#ch01-install-slide .slide layout="columns"}
依存ライブラリの導入

作業場所<br>
使う章の `package.json` があるフォルダーを開きます。

インストール<br>
サンプルに必要なライブラリを導入します。

`npm install`

完了の目印<br>
ターミナルが入力待ちに戻り、`node_modules` フォルダーができます。
:::

::: {#ch01-install-body-title .heading}
**【作業手順】　配布サンプルの依存ライブラリをインストールする**
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

:::: {#page-13 .source-page}

::: {#ch01-start-title .heading}
1.5. 開発サーバーの起動と動作確認
:::

::: {#ch01-start-slide .slide layout="columns"}
開発サーバーの起動と動作確認

起動<br>
![ターミナル](assets/terminal.svg)`npm run dev` で Vite を起動します。

表示<br>
![ブラウザー](assets/browser.svg)表示された URL を開き、商品管理の画面を確認します。

更新<br>
![エディター](assets/editor.svg)`App.tsx` の見出しを変更して保存し、画面への反映を確認します。
:::

::: {#ch01-start-body .paragraph numbered="true"}
1．インストールが完了した `ch01-setup` のターミナルで、次のコマンドを実行します。`package.json` の `dev` に登録されている Vite が起動します。
:::

::: {#ch01-start-code .code}
```powershell
npm run dev
```
:::

![Viteを起動しLocalのURLが表示されたターミナル](assets/vscode-vite-server.png){#ch01-start-terminal}

::: {#ch01-start-terminal-caption .paragraph}
`Local` に表示されたアドレスが、開発中の画面を開く URL
:::

::: {#ch01-start-location .paragraph numbered="true"}
2．**`Local` の行に表示された URL** をコピーし、ブラウザーのアドレスバーに貼り付けて［Enter］を押します。
:::

::: {#ch01-start-running .paragraph}
ブラウザーで確認する間は、Vite を起動した**ターミナルを開いたまま**にします。
:::

::::

:::: {#page-14 .source-page}

::: {#ch01-start-verify-title .heading}
**【作業手順】　初期表示と保存後の反映を確認する**
:::

::: {#ch01-start-verify .paragraph numbered="true"}
1．ブラウザーに「商品管理システム」と表示され、商品名が「ノート」、価格が「250 円」であることを確認します。
:::

![Reactのサンプルをブラウザーで起動した画面](assets/start-screen.png){#ch01-start-screen}

::: {#ch01-start-caption .paragraph}
ブラウザーに表示された商品管理システムの初期画面
:::

::: {#ch01-start-edit .paragraph numbered="true"}
2．VS Code のエクスプローラーで［src］を展開し、［App.tsx］を開きます。`<h1>` と `</h1>` の間の文字を「商品管理システム（確認）」に変更し、［Ctrl］＋［S］で保存します。
:::

![VS CodeでApp.tsxの見出しを変更した画面](assets/vscode-app-edit.png){#ch01-start-edit-screen}

::: {#ch01-start-edit-caption .paragraph}
編集するのは `<h1>` と `</h1>` で囲まれた見出しの文字列
:::

::: {#ch01-start-check .paragraph numbered="true"}
3．ブラウザーに戻ると、保存した見出しが画面に反映されています。確認後、VS Code で見出しを「商品管理システム」に戻し、保存してください。
:::

::: {#ch01-start-stop .paragraph numbered="true"}
4．Vite を起動したターミナルをクリックし、［Ctrl］＋［C］を押します。プロンプトが表示されたら、開発サーバーは停止しています。
:::

::::

:::: {#page-15 .source-page}

::: {#ch01-files-title .heading}
1.6. フォルダと主要ファイルの役割
:::

::: {#ch01-files-slide .slide layout="columns"}
フォルダと主要ファイルの役割

index.html<br>
ブラウザーが最初に読み、画面を表示する場所を用意します。

main.tsx<br>
`App` を読み込み、HTML 内の `root` に表示します。

App.tsx<br>
画面の内容を定義します。このサンプルでは商品名や価格を表示します。
:::

::: {#ch01-files-body .paragraph}
VS Code で `index.html` を開き、表示先の `id="root"` と、`src/main.tsx` を読み込む指定を確認します。開発時は Vite が TypeScript を JavaScript に変換し、`main.tsx` の処理が **`App` を `root` に描画**します。
:::

::: {#ch01-files-check .paragraph}
次に `src` の `App.tsx` と `product.ts` を開きます。`App.tsx` にある HTML に似た記述は **JSX** です。TypeScript と JSX を含むファイルは拡張子を `.tsx` とします。商品データは `product.ts` に定義されています。
:::

::: {#ch01-files-table .table}
| ファイル | 役割 |
| --- | --- |
| index.html | HTML の土台。表示場所と入口を指定する |
| src/main.tsx | App を読み込んでブラウザーに描画する |
| src/App.tsx | 商品管理の画面を定義する |
| src/product.ts | 商品の型とデータを定義する |
| package.json | 依存ライブラリと実行コマンドを指定する |
| tsconfig.json | TypeScript の型チェックなどを設定する |
:::

::::

:::: {#page-16 .source-page}

::: {#ch01-js-title .heading}
1.7. 必要な JavaScript 構文
:::

::: {#ch01-js-slide .slide layout="columns"}
必要な JavaScript 構文

変数<br>
`const` は再代入しない変数に使います。

項目の参照<br>
`product.name` で商品の名前を参照します。

配列の変換<br>
`map` で要素ごとに処理し、新しい配列を作ります。

ファイル間の連携<br>
`export` で公開し、`import` で読み込みます。
:::

::: {#ch01-js-body-title .heading}
**商品データを読み込む**
:::

::: {#ch01-js-body .paragraph}
`src/product.ts` では `export` を付けて商品データを公開しています。`src/App.tsx` は `import` でそれを読み込み、`product.name` などの式で商品情報にアクセスします。
:::

::: {#ch01-js-code .code}
```typescript
import { product } from './product'

const items = [product]
const names = items.map((item) => item.name)
```
:::

::: {#ch01-js-check .paragraph}
`items` は、商品データを1件格納した配列です。`map` に渡した関数が各商品の `name` を返すため、`names` には名前だけの配列 `['ノート']` が入ります。第2章では、同じ `map` を使って商品ごとの表示を組み立てます。
:::

::::

:::: {#page-17 .source-page}

::: {#ch01-ts-title .heading}
1.8. TypeScript の基本型とデータ型
:::

::: {#ch01-ts-slide .slide layout="columns"}
TypeScript の基本型とデータ型

基本型<br>
商品名は `string`、価格は `number`、真偽値は `boolean` です。

オブジェクト型<br>
`Product` に `id`、`name`、`price`、`category` を定義します。

配列の型<br>
`Product[]` は `Product` 型のデータが並ぶ配列です。

型チェック<br>
価格に文字列を指定すると、実行前に型エラーが分かります。
:::

::: {#ch01-ts-body .paragraph}
`Product` 型では、商品名を文字列、価格を数値として定義します。`product: Product` と型を指定すると、価格に `'250'` のような文字列を設定した場合、`npm run build` の**型チェック**でエラーを検出できます。
:::

::: {#ch01-ts-code .code filename="src/product.ts"}
```typescript
export type Product = {
  id: number
  name: string
  price: number
  category: string
}

export const product: Product = {
  id: 1,
  name: 'ノート',
  price: 250,
  category: '文具',
}
```
:::

::::

:::: {#page-18 .source-page}

::: {#ch01-exercise-title .heading}
1.9. 演習① 環境確認と社員データの型定義
:::

::: {#ch01-exercise-slide .slide layout="columns"}
演習① 環境確認と社員データの型定義

環境確認<br>
サンプルを起動して「商品管理システム」を表示します。

社員の型<br>
`src/employee.ts` に `Employee` 型を定義します。

配列の型<br>
`employees` に `Employee[]` を指定します。

型チェック<br>
`npm run build` が成功することを確認します。
:::

::: {#ch01-exercise-setup .paragraph numbered="true"}
1．依存ライブラリの導入が済んだ `ch01-setup` で `npm run dev` を実行します。「商品管理システム」が表示されることを確認し、［Ctrl］＋［C］で開発サーバーを停止します。
:::

::: {#ch01-exercise-data .paragraph numbered="true"}
2．`src/employee.ts` を開き、次の表に従って `Employee` 型を定義します。定義済みの **`employees` に `Employee[]` を指定**してください。
:::

::: {#ch01-exercise-fields .table}
| 項目名 | 意味 | 型 |
| --- | --- | --- |
| id | 社員番号 | number |
| name | 氏名 | string |
| salary | 給与 | number |
| location_name | 勤務地 | string |
:::

::: {#ch01-exercise-check .paragraph numbered="true" keep-lines="true"}
3．**`npm run build` が成功すること**を確認します。<br>
先頭の `id` を文字列 `'1001'` に変え、再度ビルドして型エラーを確認します。<br>
数値の `1001` に戻し、ビルドが成功すれば完了です。
:::

::::

:::: {#page-19 .source-page}

::: {#ch01-summary-title .heading}
章のまとめ
:::

::: {#ch01-summary-slide .slide layout="summary"}
章のまとめ

■ 開発環境の準備とViteによるプロジェクト作成

■ 章ごとの依存ライブラリの導入

■ 開発サーバーの起動と動作確認

■ フォルダと主要ファイルの役割

■ TypeScriptによるデータの型定義
:::

::: {#ch01-summary-body .paragraph}
この章では、開発環境を準備し、React のサンプルを起動しました。商品と社員のデータを例に、TypeScript でデータの形を定義しました。第2章では社員のデータを一覧に表示し、入力値を React の状態として管理します。
:::

::::
