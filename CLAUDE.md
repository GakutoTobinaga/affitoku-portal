# affitoku プロジェクト指示書

## ✅ GitHub プッシュ決定事項（必ず守る）
- **GitHub Account**: GakutoTobinaga
- **Email**: g-tobinaga+hobby@fabrica-com.co.jp
- **Repository**: GakutoTobinaga/affitoku-portal
- **ルール**: このリポジトリへのプッシュは確定事項。毎回確認不要。

## 🎯 プロジェクト目標
- **戦略**: 新規ドメイン（affitoku.jp）からSEOを最強にしてぶち抜く
- **ターゲット**: **SP（スマートフォン）に特化**
- **コンセプト**: マーケットイン思想による「実質マイナス価格」攻略ガイド

## 📱 技術スタック（確定）
| 項目 | 選定 | 理由 |
|------|------|------|
| Framework | Astro 5.18.0 | 静的生成でSEO最適化、高速化 |
| Styling | Tailwind CSS 4.0.0 | ユーティリティ重視 |
| Icons | インラインSVG | lucide-astroは互換性なし |
| Deployment | Cloudflare Pages | 高速グローバルCDN |
| Analytics | GA4 via Partytown | Off-main-thread追跡 |
| SEO | JSON-LD aggregateOffer | 複数価格表示対応 |

## 🔍 SEO 決定事項
- **Product Schema**: aggregateOffer（複数ルート対応）
  - 6つのオファー：えんためねっと(¥33) / げん玉(¥98) / トリマ(¥123) / アメフリ(¥148) / ハピタス(¥248) / 公式(¥498)
  - price範囲: ¥33～¥498
  - Google Search Console：警告ゼロ
- **OGP/メタタグ**: 完全実装済み
- **Canonical**: https://affitoku.jp 設定済み
- **Mobile First**: SP最適化完全実装

## 📊 現在の進捗
✅ Hero Section + 価格比較
✅ 3ステップガイド + 技術ガイド
✅ ランキングテーブル（TOP5）
✅ JSON-LD（aggregateOffer）
✅ ビルド成功（dist/index.html）
⏳ Cloudflare Pages デプロイ
⏳ ドメイン本契約（affitoku.jp）
⏳ OG画像作成

## 💡 重要な考え方
1. **SP第一主義**: すべての判断はSP UXを優先
2. **SEO最強化**: 新規ドメイン×正確なスキーマ＝検索ランキング上昇期待
3. **データドリブン**: netflix.jsonのデータとHTMLを常に同期
4. **警告ゼロ**: Google Search Console のエラー・警告は絶対禁止
