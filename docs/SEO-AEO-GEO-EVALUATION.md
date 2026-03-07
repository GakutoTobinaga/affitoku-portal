# SEO / AEO / GEO 評価レポート

**評価日**: 2026年3月7日  
**評価基準**: [seo-geo](https://skills.sh/resciencelab/opc-skills/seo-geo) スキル（Princeton GEO 9メソッド・プラットフォーム別アルゴリズム・SEOチェックリスト）  
**対象**: affitoku.jp（Netflix実質マイナス857円 / ポイ活計算エンジン）

---

## 1. SEO（検索エンジン最適化）評価

### 1.1 技術SEO

| 項目 | 状態 | 備考 |
|------|------|------|
| **P0** HTTPS / 静的サイト | ✅ | Cloudflare Pages 想定で HTTPS |
| **P0** モバイルファースト | ✅ | viewport-fit=cover, SP 特化設計 |
| **P0** ユニーク title / meta description | ✅ | ページ別に設定済み |
| **P0** 単一 H1 / H1 に主キーワード | ✅ | 「侍ジャパン〜」「実質利益〜」 |
| **P1** Canonical | ✅ | Layout で動的 canonical 設定 |
| **P1** XML Sitemap | ✅ | @astrojs/sitemap で生成（dist に出力） |
| **P1** AI Bot アクセス | ⚠️ **要対応** | **robots.txt が未設置**（後述） |
| **P2** OGP / Twitter Card | ✅ | og:title, og:image 1200x630 等 |
| **P2** 外部リンク rel | ✅ | `rel="noopener noreferrer"` 使用 |

### 1.2 オンページSEO

- **Title**: キーワード（Netflix / 実質マイナス / WBC）含む ✅  
- **Description**: 150字前後・訴求文 ✅  
- **見出し階層**: H1 > H2（3ステップ、TOP5、技術ガイド、Q&A、著者）✅  
- **内部リンク**: トップ → /netflix/ あり。カテゴリは # のため P2 で強化余地あり  
- **画像 alt**: HowTo 画像に alt 指定あり。OG 画像に og:image:alt あり ✅  

### 1.3 構造化データ（Schema）

| スキーマ | ページ | 状態 |
|----------|--------|------|
| Organization | 全ページ（Layout） | ✅ name, url, description, **knowsAbout** |
| Product + AggregateOffer | 全ページ | ✅ 6オファー・価格範囲・priceValidUntil |
| FAQPage | /netflix/ | ✅ 3問・mainEntity |
| HowTo | /netflix/ | ✅ 3ステップ・totalTime・estimatedCost・**step.image** 対応 |
| WebPage | /netflix/ | ✅ author（アフィトク！編集部）、**citation**（公式URL） |

**推奨**: Google Rich Results Test / Schema.org Validator でデプロイ後に再検証。

---

## 2. AEO（アンサーエンジン最適化）評価

AEO = 検索結果の「答え」として選ばれやすくする最適化（リッチリザルト・ファーストスニペット・AI 概要）。

### 2.1 答えファースト構造

- **Hero 直下に「実質 -857円」を表示** → 答えファースト ✅  
- **計算内訳**（498 - 465 - 890 = -857）をすぐ下に表示 → 根拠が明確 ✅  

### 2.2 リッチリザルト向けスキーマ

- **FAQPage**: Q&A セクションと対応。AI Overview / リッチスニペット候補 ✅  
- **HowTo**: 3ステップ・画像URL 対応。動画なしでも HowTo リッチリザルト対象 ✅  
- **Product aggregateOffer**: 価格比較・複数ルートを構造化で提供 ✅  

### 2.3 コンテンツ構造

- 番号付きステップ（3ステップガイド）✅  
- 表形式（ランキング TOP5）✅  
- Q&A 形式（質問＋簡潔な回答）✅  
- 短文段落・箇条書き ✅  

**改善案**: FAQ の `acceptedAnswer.text` に「〇〇公式によると〜」と出典を一文入れると、AEO/GEO 両方で有利（後述）。

---

## 3. GEO（ジェネレーティブエンジン最適化）評価

GEO = AI 検索（ChatGPT / Perplexity / Google SGE / Copilot / Claude）で**引用されやすくする**最適化。  
基準: Princeton GEO 9メソッド + プラットフォーム別アルゴリズム。

### 3.1 Princeton GEO 9メソッド

| メソッド | 効果 | 現状 | 評価 |
|----------|------|------|------|
| **Cite Sources** | +40% | 計算内訳・Q&A 直下に出典リンク。WebPage.citation に公式URL | ✅ 実装済み |
| **Statistics Addition** | +37% | 498円、465円、890円、-857円、30～60日等の数値多数 | ✅ 十分 |
| **Quotation Addition** | +30% | 専門家の引用はなし（計算機コンテンツのため優先度低） | △ 任意 |
| **Authoritative Tone** | +25% | 著者プロフィール・検証ポリシー・専門分野で権威性 | ✅ 実装済み |
| **Easy-to-understand** | +20% | 3ステップ・表・短文 | ✅ |
| **Technical Terms** | +18% | 爆アゲセレクション、判定期間、成果報酬等 | ✅ |
| **Unique Words** | +15% | 実質マイナス価格、ポイ活等の用語 | ✅ |
| **Fluency Optimization** | +15～30% | 段落・リストで整理 | ✅ |
| **Keyword Stuffing 回避** | -10% 回避 | キーワード詰め込みなし | ✅ |

**結論**: Cite Sources・Statistics・Authoritative（EEAT）が揃っており、GEO の要所は押さえている。

### 3.2 プラットフォーム別

- **Google AI Overview (SGE)**  
  - 権威ある引用（+132% の研究結果）→ **citation・脚注で対応** ✅  
  - E-E-A-T → **著者・編集部プロフィール・検証ポリシー** ✅  
  - 構造化データ → **FAQ / HowTo / WebPage / Product** ✅  

- **Perplexity**  
  - FAQ Schema → 実装済み ✅  
  - PerplexityBot → **robots.txt で許可が必要** ⚠️  

- **ChatGPT**  
  - ドメインの信頼性・引用しやすい構造 → 出典付き・数値・明確な段落で対応 ✅  
  - 30日以内更新 → last_updated 表示あり。運用で定期更新が望ましい  

- **Claude / Copilot**  
  - 構造の明確さ・事実の密度 → 表・ステップ・数値で対応 ✅  
  - Bing インデックス（Copilot）→ **robots.txt + sitemap 提出** が前提  

### 3.3 EEAT（Experience, Expertise, Authoritativeness, Trustworthiness）

- **著者・編集部**: 「アフィトク！VODコスト最適化チーム」プロフィール ✅  
- **専門分野・検証ポリシー**: 1次ソース・毎日正午更新の記載 ✅  
- **Organization knowsAbout**: VODポイ活、サブスク最適化、ドコモ経済圏 ✅  
- **WebPage author + citation**: 編集部名・公式URL を JSON-LD で明示 ✅  

---

## 4. 総合スコア（5段階イメージ）

| 軸 | スコア | コメント |
|----|--------|----------|
| **SEO** | 4/5 | メタ・Canonical・Schema・SP 対応は良好。robots.txt 未設置が P1 のマイナス |
| **AEO** | 4/5 | 答えファースト・FAQ/HowTo/Product スキーマでリッチリザルト対応済み |
| **GEO** | 4.5/5 | 引用・数値・EEAT・citation スキーマまで実装。robots と FAQ 文言でさらに伸ばせる |

---

## 5. 推奨アクション（優先順）

### P0 / P1（すぐ対応推奨）

1. **robots.txt の設置**  
   - `public/robots.txt` を追加し、AI ボットを許可。  
   - 例:
     ```
     User-agent: *
     Allow: /
     User-agent: Googlebot
     Allow: /
     User-agent: Bingbot
     Allow: /
     User-agent: PerplexityBot
     Allow: /
     User-agent: GPTBot
     Allow: /
     User-agent: Claude-Web
     Allow: /
     Sitemap: https://affitoku.jp/sitemap-index.xml
     ```
   - これで Google / Bing / Perplexity / ChatGPT / Claude のクロールを明示許可し、GEO の「発見されやすさ」を確保。

2. **WBC2026 公式 URL の監視（P1）**  
   - WBC2026 の公式サイト（大会概要ページ等）が確定次第、その URL を `netflix.json` の `citations[3].url` に設定する。  
   - 狙い: Google に「この記事は最新の時事（WBC）と常に同期している」と伝え、**鮮度スコア（Freshness）** を最大化する。  
   - 設定後、WebPage の `citation` に自動で含まれる。

### P2（余裕があれば）

3. **FAQ 回答テキストの GEO 強化**  
   - `acceptedAnswer.text` に出典を一文含める（Princeton +40% に寄与）。  
   - 例:  
     - 「えんためねっとの利用規約では、報酬は30～60日後に付与されます。iOS設定を〜」  
   - 既存の脚注 [1][2] と重複しない程度に簡潔に。

4. **HowTo 図解画像の配置**  
   - `public/images/howto-step1.png` ～ `howto-step3.png` を配置。  
   - 既存の HowTo スキーマ・HTML がそのまま画像付きで有効になる。

5. **Google Search Console / Bing Webmaster**  
   - デプロイ後、sitemap（`https://affitoku.jp/sitemap-index.xml`）を送信。  
   - リッチリザルト・モバイルの使いやすさでエラーゼロを維持（CLAUDE.md 方針と一致）。

---

## 6. 最終チェックの儀式（デプロイ後）

デプロイ完了後、以下2点を必ず確認する。

| 確認項目 | 手順 | 合格基準 |
|----------|------|----------|
| **Google リッチリザルト テスト** | [Rich Results Test](https://search.google.com/test/rich-results) で `https://affitoku.jp/netflix/` を入力 | Product / FAQ / HowTo の**すべてのスキーマが「有効」（緑）** |
| **Search Console** | [Search Console](https://search.google.com/search-console) の「エクスペリエンス」→「リッチリザルト」／「ページ」 | **「重大な問題」0件**、ステータス **「検証：開始」** |

- HowTo 図解3枚（`howto-step1〜3.png`）を配置した場合は、HowTo スキーマに `image` が含まれていることも確認する。

---

## 7. 参照スキル・ドキュメント

- **seo-geo** (resciencelab/opc-skills): [skills.sh](https://skills.sh/resciencelab/opc-skills/seo-geo)  
- Princeton GEO: Cite Sources +40%, Statistics +37%, その他 9 メソッド  
- プラットフォーム別: Google SGE（E-E-A-T・引用）、Perplexity（FAQ・Bot 許可）、ChatGPT（ドメイン信頼・更新性）  

以上を満たすことで、「公式データに基づく信頼できる計算機」として SEO・AEO・GEO のいずれでも評価されやすい状態になっています。
