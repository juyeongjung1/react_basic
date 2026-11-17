:::: {#page-1 .source-page}

::: {#front-cover-title .heading}
React 開発入門
:::

::: {#front-cover-number .paragraph}
XXXX-T-01
:::

::: {#front-cover-subtitle .paragraph}
～SPA開発実践(TypeScript対応)~
:::

::::

:::: {#page-2 .source-page}

::: {#front-trademarks .trademarks}
商標

• アマゾン ウェブ サービス、AWS および Amazon Web Services ロゴは、米国その他の諸国における、Amazon.com, Inc. またはその関連会社の商標です。

• Cisco、Cisco Systems、Cisco Systems ロゴは、Cisco Systems, Inc. および関連会社の米国ならびに他の国における商標もしくは登録商標です。

• Intel、インテルは、米国およびその他の国における Intel Corporation の商標です。

• ITIL®は AXELOS Limited の登録商標であり、AXELOS Limited の許可のもとに使用されています。すべての権利は留保されています。

• Microsoft、Windows は、米国 Microsoft Corporation の、米国およびその他の国における登録商標または商標です。

• Oracle と Java は、Oracle Corporation およびその子会社、関連会社の米国およびその他の国における登録商標です。

• PMI、PMP、PMBOK は、プロジェクトマネジメント協会（Project Management Institute, Inc.）の登録商標です。

• VMware、VMware ロゴは、VMware, Inc. の米国および各国での商標または登録商標です。

• BOOT CAMP、NEW TRAIN、MIX TRAIN、TRAINOCAMP は、トレノケート株式会社の登録商標です。

その他の会社名、製品名およびサービス名は、それぞれ各社の商標または登録商標です。
:::

::::

:::: {#page-3 .source-page}

::: {#front-contents .contents-heading}
目次
:::

::::

:::: {#page-4 .source-page}

::: {#front-contents-continuation .blank-page}
:::

::::

:::: {#page-5 .source-page}

::: {#front-introduction .introduction-cover}
はじめに
:::

::::

:::: {#page-6 .source-page}

::: {#front-introduction-verso .blank-page}
:::

::::

:::: {#page-7 .source-page}

::: {#front-goals-title .heading}
コースの目標
:::

::: {#front-goals-slide .slide layout="bullets"}
コースの目標

■ ReactとTypeScriptで画面表示・入力処理ができる

■ React Routerで画面遷移とURLパラメータを扱える

■ Contextで共通データを参照・更新できる

■ ExpressとデータベースでCRUD APIを作成できる

■ REST APIと連携したSPAを構築できる
:::

::: {#front-goals-intro .paragraph}
本コースを修了することで、以下のことができるようになります。
:::

::: {#front-goal-react .paragraph}
■ React と TypeScript で、画面表示とフォームの入力処理を実装できる。
:::

::: {#front-goal-router .paragraph}
■ React Router で画面遷移と URL パラメータを扱える。
:::

::: {#front-goal-context .paragraph}
■ Context を使って、複数の画面から共通データを参照・更新できる。
:::

::: {#front-goal-api .paragraph}
■ Express とデータベースで、検索・登録・更新・削除の API を作成できる。
:::

::: {#front-goal-spa .paragraph}
■ REST API と連携し、CRUD 機能を備えた SPA を構築できる。
:::

::: {#front-goal-option-title .heading}
**オプション実施時**
:::

::: {#front-goal-authentication .paragraph}
■ ログイン・ログアウトを実装し、画面と API へのアクセスを制御できる。
:::

::::

:::: {#page-8 .source-page}

::: {#front-overview-title .heading}
コースの概要
:::

::: {#front-overview-slide .slide layout="plain"}
コースの概要

第1章　開発環境とTypeScriptの基礎

第2章　Reactによる画面表示と入力処理

第3章　ルーティングと画面構成

第4章　画面間のデータ共有

第5章　REST APIとデータベース連携

第6章　データの登録

第7章　データの更新・削除

【オプション】第8章　ログイン認証
:::

::: {#front-overview .paragraph}
本コースは4日間の講義と実機演習で構成されています。講義では商品管理システムを例に、画面と API の処理を確認します。各章の演習では、学んだ内容を人事管理システムに応用します。
:::

::::

:::: {#page-9 .source-page}

::: {#front-position-title .heading}
コースの位置付け
:::

::: {#front-position-slide .slide layout="course-path"}
コースの位置付け

基礎から学べるHTML<br>
～CSS とJavaScript を使用したWebページの作成～

JavaScript文法編

データベース入門

SPA開発入門

Vue.js 3 フロントエンド開発<br>
～SPA構築実践(TypeScript対応)～

React 開発入門<br>
～SPA開発実践(TypeScript対応)~
:::

::: {#front-course-audience .paragraph}
本コースでは、SPA の画面遷移や通信の考え方を、React と TypeScript を使って実装します。画面遷移とデータベース連携を備えた SPA を構築したい方が対象です。
:::

::: {#front-prerequisites .paragraph}
受講前に、以下の知識を身に付けていることを前提とします。
:::

::: {#front-prerequisite-html .paragraph}
■ HTML と CSS で基本的な Web ページを作成できる。
:::

::: {#front-prerequisite-js .paragraph}
■ JavaScript の基本文法を理解している。
:::

::: {#front-prerequisite-sql .paragraph}
■ データベースを操作する基本的なSQL文を理解している。
:::

::: {#front-prerequisite-note .paragraph}
※React と TypeScript の経験は問いません。
:::

::::

:::: {#page-10 .source-page}

::: {#front-notation-title .notation-title}
テキストの表記
:::

::: {#front-notation-ui .notation baselines="153.74 180.02 235.70" frames="121.70 250.97 515.73 288.05"}
■ 画面に表示される文字とキーボードキー

メニュー名やキーボードのキーは、［ ］で囲んで表記します。

表記例

画面に表示される文字　 ［ファイル］→［フォルダーを開く］<br>キーボードキー　　　　 ［Ctrl］＋［C］
:::

::: {#front-notation-command .notation font="mono" baselines="328.73 355.01 410.83" frames="122.18 426.07 515.73 499.15"}
■ コンソール上の英字やコード・コマンド・パラメータ

コンソールに表示される文字や、入力するコマンドには等幅書体を使います。

表記例

node -v<br>npm -v<br>npm install<br>npm run dev
:::

::: {#front-notation-var .notation font="mono" baselines="539.83 566.14 621.82" frames="123.74 637.06 515.73 656.14 123.74 666.10 515.73 703.18"}
■ ユーザーが任意に指定する値

コマンドの例で置き換えられるフォルダ名などは、太字の斜体で表記します。

表記例

cd ***react-sample***

npm create vite@7.1.3 ***demo*** -- --template react-ts<br>cd ***demo***
:::

::: {#front-notation-page-anchor .blank-page}
:::

::::

:::: {#page-11 .source-page}

::: {#front-notation-shell .notation font="mono" baselines="107.78 170.06 207.74" frames="123.74 222.98 515.73 260.09"}
■ UNIX や Linux のコマンド表記

コマンド例の先頭にある `$` は、入力待ちの状態を示すプロンプトです。

表記例

$ npm install<br>$ npm run dev
:::

::: {#front-notation-prompt-title .notation-title continuation="true"}
プロンプトの表記
:::

::: {#front-notation-emphasis .notation baselines="300.77 327.05 364.73" frames="121.70 379.97 515.73 399.05"}
■ 重要な語句や強調

本文中の重要な語句や説明は MS Pゴシックの太字で表記します。

表記例

SPA は **シングルページアプリケーション** の略です。
:::

::: {#front-notation-continuation-anchor .blank-page}
:::

::::

:::: {#page-12 .source-page}

::: {#front-end-verso .blank-page}
:::

::::
