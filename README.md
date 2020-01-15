# Dr.NA_ResultFront

name : Masakatsu Shibata

## ■ 準備

ローカル開発マシンにNode 8.16.0またはNode 10.16.0以降のバージョンが必要

``` shell
$ npx create-react-app my-app
$ cd my-app
```

不要なファイルの削除はここでは省略。

## ■ インストール

- `Sass` の利用

  ``` shell
  $ npm i -D node-sass
  ```

- ルーティング

  ``` shell
  $ npm i -S react-router-dom
  ```

- Redux

  ``` shell
  $ npm i -S Redux
  ```

- React + Redux

  ``` shell
  $ npm i -S react-redux
  ```

## ■ 設定

- 環境変数

  - 開発環境 【 <a href=".env.development">.env.development</a> 】

    ``` shell
    $ touch .env.development
    ```

  - 本番環境 【 <a href=".env.production">.env.production</a> 】

    ``` shell
    $ touch .env.production
    ```

- 絶対パスで`import` する

  - `.env` に記述

    ``` .env
    NODE_PATH=.
    ```

  - `VSCode` の補完 【 <a href="jsconfig.json">jsconfig.json</a> 】

    ``` shell
    $ touch jsconfig.json
    ```

- ポート番号指定

  - `.env` に記述

    ``` .env
    PORT=ポート番号
    ```

## ■ ディレクトリ構成

- `src/`
  - `components/`  => `JSX` を扱っている
    - `layouts` => レイアウトのみを行うJSX
    - `pages` => 個々のページのJSX
    - `ui` => UI部品のJSX
  - `config/` => `components` 内で使用する設定(定数など)
  - `images/` => 画像ファイル等
  - `redux/` => Redux
    - `reducers` => Reducers
  - `stylesheet` => Sass(CSS)ファイル

## ■ 運用

- 開発モードで実行

  ``` shell
  $ npm run start
  ```

- テスト

  ``` shell
  $ npm run test
  ```

- 本番用にビルド

  ``` shell
  $ npm run build
  ```

<p>&copy;2020 Dr.NA_ResultFront</p>