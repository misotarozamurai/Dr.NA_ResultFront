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

- Sass

  ``` shell
  $ npm i -D node-sass
  ```

- Saas をモジュールする
  - ejectせずに、webpack, babel, estlintなどの設定を上書きするツールと、css moduleを有効にするプラグインを使って実現

    ``` shell
    $ npm i -D react-app-rewired codebandits/react-app-rewire-css-modules
    ```
  
  - プラグインがsass-loaderとnode-sassに依存してるのでこれも追加

    ``` shell
    $ npm i -D sass-loader node-sass 
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

- Redux 非同期

  ``` shell
  $ npm i -S redux-thunk
  ```

- Redux 開発用ログ

  ``` shell
  $ npm i -S redux-logger
  ```

- REST API

  ``` shell
  $ npm i -S axios
  ```

- GitHub Pages

  ``` shell
  $ npm i -D gh-pages
  ```

## ■ 設定

- Saas Module

  - <a href="./config-overrides.js">config-overrides.js</a> を作って、設定を記述

    ``` shell
    $ touch config-overrides.js
    ```

  - <a href="./package.json">package.json</a> のscriptsを変更

    ``` json
    {
      "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test --env=jsdom"
      }
    }
    ```

  - css moduleを有効にしたいsassファイルの拡張子を `.sass`から `.module.sass`に変える

    ``` js
    import style from 'style.module.sass'
    ```

- 環境変数

  - 開発環境 【 <a href=".env.development.sample">.env.development</a> 】

    ``` shell
    $ touch .env.development
    ```

  - 本番環境 【 <a href=".env.production.sample">.env.production</a> 】

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
  - `containers` => Reduxのstoreに格納されているデータをComponentに紐付ける
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

- GitHub Pages

  ``` shell
  $ npm run deploy
  ```

<p>&copy;2020 Dr.NA_ResultFront</p>