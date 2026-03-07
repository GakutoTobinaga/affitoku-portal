/**
 * Docomo 爆アゲページから取得した画像を WebP に変換し、
 * HowTo 用の howto-step1〜3.webp として保存する。
 * 実行: node scripts/convert-howto-to-webp.mjs
 */
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const imagesDir = join(root, 'public', 'images');

const mapping = [
  { src: 'docomo-bakuage-step.png', dest: 'howto-step1.webp', alt: 'STEP 1: えんためねっと経由でNetflixへ' },
  { src: 'docomo-bakuage-return.png', dest: 'howto-step2.webp', alt: 'STEP 2: ドコモ爆アゲセレクションを適用' },
  { src: 'docomo-bakuage-kv.jpg', dest: 'howto-step3.webp', alt: 'STEP 3: 実質マイナス857円を確認！' },
];

await mkdir(imagesDir, { recursive: true });

for (const { src, dest } of mapping) {
  const srcPath = join(imagesDir, src);
  const destPath = join(imagesDir, dest);
  try {
    await sharp(srcPath)
      .webp({ quality: 82, effort: 4 })
      .toFile(destPath);
    console.log(`✓ ${src} → ${dest}`);
  } catch (e) {
    console.error(`✗ ${src}:`, e.message);
  }
}

console.log('Done. Update netflix.json howto_images to use .webp paths.');
