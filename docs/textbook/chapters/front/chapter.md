:::: {#page-1 .source-page}

::: {#front-introduction .heading}
はじめに
:::

::::

:::: {#page-2 .source-page}

::: {#front-goals-title .heading}
コースの目標
:::

::: {#front-goals-slide .slide layout="columns"}
コースの目標

React<br>
TypeScript で画面表示と入力処理を実装する。

React Router<br>
画面遷移を設定し、URL のパラメータを扱う。

Context<br>
複数の画面で共通データを参照・更新する。

Express と DB<br>
検索・登録・更新・削除の API を作る。

REST API 連携<br>
React の画面から CRUD を行える SPA を作る。
:::

::: {#front-goals-intro .paragraph}
本コースでは、演習ガイドと画面・共通設定・DB 接続のひな形を使います。修了時には、ブラウザーでの操作が REST API を通じてデータベースに反映されるところまでを実装します。
:::

::: {#front-goal-option-title .heading}
**オプション実施時**
:::

::: {#front-goal-authentication .paragraph}
■ ログイン・ログアウトを実装し、利用者の状態に応じて画面と API へのアクセスを制御できる。
:::

::::

:::: {#page-3 .source-page}

::: {#front-overview-title .heading}
コースの概要
:::

::: {#front-overview-slide .slide layout="columns"}
コースの概要

1日目<br>
第1・2章　開発環境、型定義、画面表示と入力処理

2日目<br>
第3・4章　画面遷移、フォーム、画面間のデータ共有

3日目<br>
第5章　REST API とデータベース、一覧・検索・詳細取得

4日目<br>
第6・7章　データの登録・更新・削除
:::

::: {#front-overview .paragraph}
本コースは4日間の講義と実機演習で構成されています。講義では商品管理システムを例に、画面と API の処理を確認します。各章の演習では、学んだ内容を使って人事管理システムを段階的に作ります。
:::

::: {#front-course-option .paragraph}
第8章のログイン認証は、実機演習の進み具合に応じて扱います。
:::

::: {#front-course-samples .paragraph}
各章の配布サンプルを使うときは、その章のフォルダを開き、`package.json` がある場所で `npm install` を実行します。
:::

::::

:::: {#page-4 .source-page}

::: {#front-position-title .heading}
コースの位置付け
:::

::: {#front-position-slide .slide layout="columns"}
コースの位置付け

前提となる知識<br>
HTML・CSS によるページ作成と JavaScript の基本文法

本コース<br>
React と TypeScript を使った画面・フォームの実装

到達点<br>
画面遷移とデータベース連携を備えた SPA の構築
:::

::: {#front-course-audience .paragraph}
React による Web アプリケーション開発を学びたい方、画面遷移とデータベース連携を備えた SPA を構築したい方が対象です。
:::

::: {#front-prerequisites .paragraph}
受講前に、以下の知識を身に付けていることを前提とします。
:::

::: {#front-prerequisite-html .paragraph}
● HTML と CSS で基本的な Web ページを作成できる。
:::

::: {#front-prerequisite-js .paragraph}
● JavaScript の基本文法を理解している。
:::

::: {#front-prerequisite-note .paragraph}
※React と TypeScript の経験は問いません。
:::

::::

:::: {#page-5 .source-page}

::: {#front-notation-title .heading}
[テキストの表記]{.s001}
:::

::: {#front-notation-ui-title .heading}
**■ 画面に表示される文字とキーボードキー**
:::

::: {#front-notation-ui .paragraph}
画面上のメニュー名やキーボードのキーは、［ ］で囲んで表します。
:::

::: {#front-notation-ui-examples .table has-header="false"}
| | |
| --- | --- |
| 画面に表示される文字 | ［ファイル］→［フォルダーを開く］を選択します。 |
| キーボードキー | ［Ctrl］＋［C］で開発サーバーを停止します。 |
:::

::: {#front-notation-command-title .heading}
**■ コマンドとソースコード**
:::

::: {#front-notation-command .paragraph}
コマンド欄の文字はターミナルに入力します。コード欄にファイル名がある場合は、そのファイルを参照または編集します。
:::

::: {#front-notation-command-example .code}
```powershell
npm install
npm run dev
```
:::

::: {#front-notation-var-title .heading}
**■ 環境に応じて変わる値**
:::

::: {#front-notation-var .paragraph}
フォルダのパスやポート番号は、利用している環境に合わせます。開発サーバーを起動したときは、ターミナルに表示された URL を開きます。
:::

::::

:::: {#page-6 .source-page}

::: {#front-contents .contents-heading}
目次
:::

::::
