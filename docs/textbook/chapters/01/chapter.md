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

ブラウザー<br>
React で商品一覧や商品詳細を表示します。

REST API<br>
画面からの要求を受け付け、商品データを JSON で返します。

データベース<br>
商品名や価格、社員情報などを保存します。
:::

::: {#ch01-spa-react .heading}
**React で作る画面**
:::

::: {#ch01-spa-body .paragraph}
React は、画面を構成する部品を組み合わせてユーザーインターフェースを作るための JavaScript ライブラリです。この教材では、商品管理システムを題材に画面の作り方を学び、演習では同じ考え方で人事管理システムを作ります。
:::

::: {#ch01-spa-behavior .paragraph}
SPA（Single Page Application）は、最初に読み込んだページの中で、選択した画面に応じて表示を切り替える Web アプリケーションです。たとえば一覧から商品を選ぶと、React はその商品の詳細画面を表示します。
:::

::: {#ch01-spa-api .paragraph}
後半では、React が REST API に商品データを要求し、Express で作った API がデータベースから読み取った結果を JSON で返す構成にします。本章では、手元のサンプルデータを表示して環境を確認します。
:::

::::

:::: {#page-3 .source-page}

::: {#ch01-tools-title .heading}
1.2. 開発環境の準備
:::

::: {#ch01-tools-slide .slide layout="columns"}
開発環境の準備

作業フォルダ<br>
配布物を展開します。第1章のサンプルは `ch01-setup` です。

VS Code<br>
ファイルを編集し、ターミナルを開きます。

Node.js<br>
Vite を実行します。`node -v` で確認します。

npm<br>
ライブラリを導入します。`npm -v` で確認します。
:::

::: {#ch01-tools-body-title .heading}
**作業フォルダとターミナル**
:::

::: {#ch01-tools-body .paragraph}
配布ファイルを作業用フォルダへ展開します。VS Code の［ファイル］→［フォルダーを開く］から展開先を開き、［ターミナル］→［新しいターミナル］を選択します。
:::

::: {#ch01-tools-node .paragraph}
本章は Windows と Node.js 24 系で確認しています。Node.js が入っていない場合は、[Node.js の公式ダウンロードページ](https://nodejs.org/ja/download)からインストールします。VS Code が入っていない場合は、[VS Code の公式サイト](https://code.visualstudio.com/)から入手します。インストール後は VS Code を開き直し、次のコマンドでバージョンが表示されることを確認します。
:::

::: {#ch01-tools-code .code}
```powershell
node -v
npm -v
```
:::

::: {#ch01-tools-check .paragraph}
PowerShell が `npm.ps1` の実行を拒否する場合は、`npm.cmd -v` で確認します。本章のほかの npm コマンドも、同じように `npm.cmd` で実行できます。
:::

::::

:::: {#page-4 .source-page}

::: {#ch01-vite-title .heading}
1.3. Vite でプロジェクトを作成する
:::

::: {#ch01-vite-slide .slide layout="columns"}
Vite でプロジェクトを作成する

Vite の役割<br>
ひな形の作成、開発サーバーの起動、本番用ビルドに使います。

テンプレート<br>
`react-ts` で React と TypeScript を選びます。

`npm create vite@7.1.3 demo -- --template react-ts`

作成先<br>
`demo` に設定ファイルとサンプルが作られます。
:::

::: {#ch01-vite-body-title .heading}
**ひな形の作成**
:::

::: {#ch01-vite-body .paragraph}
新規プロジェクトを自分で作る場合は、作業用フォルダをターミナルで開き、次のコマンドを実行します。`demo` は新たに作成するフォルダ名です。`react-ts` を指定すると、React と TypeScript の設定が入ったひな形が作られます。 [Vite の公式ガイド](https://vite.dev/guide/#scaffolding-your-first-vite-project)
:::

::: {#ch01-vite-code .code}
```powershell
npm create vite@7.1.3 demo -- --template react-ts
```
:::

::: {#ch01-vite-check .paragraph}
初回に npm から作成ツールのインストールを確認された場合は、`y` を入力します。追加で実験的な機能や依存関係の自動インストールを聞かれた場合は、`No` を選びます。完了後、`demo` に `package.json` と `src` フォルダがあることを確認します。
:::

::: {#ch01-vite-course .paragraph}
**研修では配布済みのサンプルを使います。** `ch01-setup` の作成は済んでいるので、受講者は 1.4 節から作業を始めます。
:::

::::

:::: {#page-5 .source-page}

::: {#ch01-install-title .heading}
1.4. 依存ライブラリの導入
:::

::: {#ch01-install-slide .slide layout="columns"}
依存ライブラリの導入

作業フォルダ<br>
使う章のサンプルを開きます。第1章は `ch01-setup` です。

`cd ch01-setup`

依存ライブラリ<br>
`package.json` がある場所で次のコマンドを実行します。

`npm install`

完了の目印<br>
ライブラリが `node_modules` に入ります。
:::

::: {#ch01-install-body-title .heading}
**配布サンプルの準備**
:::

::: {#ch01-install-body .paragraph}
配布サンプルには、依存ライブラリを指定する `package.json` と、解決したバージョンを記録した `package-lock.json` が入っています。配布物の容量を抑えるため、ライブラリの実体は演習を始めるときに各自でインストールします。
:::

::: {#ch01-install-action .paragraph}
配布物のフォルダを VS Code で開き、ターミナルで次のコマンドを実行します。すでに `ch01-setup` を開いている場合は、そのまま `npm install` を実行します。
:::

::: {#ch01-install-code .code}
```powershell
cd ch01-setup
npm install
```
:::

::: {#ch01-install-check .paragraph}
インストールにはインターネット接続が必要です。完了すると、`ch01-setup` の中に `node_modules` が作られます。次の章のサンプルを使うときも、その章の `package.json` があるフォルダで `npm install` を実行します。
:::

::::

:::: {#page-6 .source-page}

::: {#ch01-start-title .heading}
1.5. 開発サーバーの起動と動作確認
:::

::: {#ch01-start-slide .slide layout="columns"}
開発サーバーの起動と動作確認

起動<br>
![ターミナル](assets/terminal.svg)`ch01-setup` で **`npm run dev`** を実行します。

表示<br>
![ブラウザー](assets/browser.svg)表示された URL を開き、商品管理の画面を確認します。

更新<br>
![エディター](assets/editor.svg)`App.tsx` の見出しを変更して保存し、画面への反映を確認します。
:::

::: {#ch01-start-body .paragraph}
`ch01-setup` で次のコマンドを実行します。ターミナルに表示された `Local` の URL（例 `http://localhost:5173/`）をブラウザーで開きます。
:::

::: {#ch01-start-code .code}
```powershell
npm run dev
```
:::

![React のサンプルをブラウザーで起動した画面](assets/start-screen.png){#ch01-start-screen}

::: {#ch01-start-caption .paragraph}
「商品管理システム」とサンプル商品が表示されます。
:::

::: {#ch01-start-check .paragraph}
`src/App.tsx` の見出しを変更して保存し、画面に反映されたら元に戻します。停止はターミナルの［Ctrl］＋［C］です。
:::

::::

:::: {#page-7 .source-page}

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
ブラウザーはまず `index.html` を読み込み、そこで指定された `src/main.tsx` を実行します。`main.tsx` が `App` を `id="root"` の要素に描画します。`.tsx` は TypeScript のコードに JSX（タグのような画面の記述）を含むファイルに使います。
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

:::: {#page-8 .source-page}

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
この例では、`items` に商品が1件入っています。`map` で各商品の名前を取り出すので、`names` は `['ノート']` になります。第2章ではこの考え方を一覧表示に使います。
:::

::::

:::: {#page-9 .source-page}

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
`product: Product` で商品データの型を指定します。`name: string` は文字列の項目、`price: number` は数値の項目です。`price: '250'` に変えると、`npm run build` の型チェックでエラーになります。 [React で TypeScript を使う方法](https://react.dev/learn/typescript)
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

:::: {#page-10 .source-page}

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

::: {#ch01-exercise-setup .paragraph}
`ch01-setup` で `npm install` を実行した状態から始めます。`npm run dev` で画面を開き、「商品管理システム」とサンプル商品を確認します。確認後、［Ctrl］＋［C］で開発サーバーを止めます。
:::

::: {#ch01-exercise-data .paragraph}
`src/employee.ts` に `type Employee` を追加します。次の表を使い、定義済みの `employees` に `Employee[]` を指定してください。
:::

::: {#ch01-exercise-fields .table}
| 項目名 | 意味 | 型 |
| --- | --- | --- |
| id | 社員番号 | number |
| name | 氏名 | string |
| salary | 給与 | number |
| location_name | 勤務地 | string |
:::

::: {#ch01-exercise-check .paragraph}
`npm run build` が成功することを確認します。社員番号を一時的に `'1001'` に変えると型エラーになります。数値の `1001` に戻し、再度ビルドが成功すれば完了です。
:::

::::

:::: {#page-11 .source-page}

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
