# How-To 図解画像（3ステップ）

Netflix 実質マイナス857円ページのリッチリザルト用です。HowTo Schema の `image` に紐付いているのは **howto-step1〜3.webp**（WebP 形式で軽量化済み）です。

## 現在の画像（ドコモ爆アゲページ由来）

[ドコモ 爆アゲ×Netflix](https://ssw.web.docomo.ne.jp/bakuage/netflix/) をクロールして取得した画像を WebP 変換した3枚。

| ファイル | 内容 |
|----------|------|
| `howto-step1.webp` | お申込み手順イメージ（えんためねっと経由の流れ） |
| `howto-step2.webp` | ポイント還元イメージ（爆アゲセレクション適用） |
| `howto-step3.webp` | キービジュアル（Netflixおトク＝実質マイナス訴求） |

再生成する場合: 同じドコモページから再度画像を取得し、`node scripts/convert-howto-to-webp.mjs` を実行。スクリプトは `docomo-bakuage-step.png` / `docomo-bakuage-return.png` / `docomo-bakuage-kv.jpg` を howto-step1〜3.webp に変換します。

## 差し替え用（任意）

より「自サイト・えんためねっと」寄りにしたい場合は、以下を撮影して WebP 化の上で上書きしてください。

| ファイル | 撮影内容 |
|----------|----------|
| `howto-step1.webp` | **えんためねっと**のネトフリ案件ボタンが映っている画面 |
| `howto-step2.webp` | 報酬確定の条件が書かれている画面（現状はドコモ還元図で代用） |
| `howto-step3.webp` | 当サイトの「**実質マイナス857円**」計算表が映っている画面 |
