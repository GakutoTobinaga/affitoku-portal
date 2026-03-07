import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Create OG image using SVG
const svgImage = fs.readFileSync(path.join(process.cwd(), 'public/og-image.svg'), 'utf8');

sharp(Buffer.from(svgImage))
  .png()
  .toFile(path.join(process.cwd(), 'public/og-image.png'))
  .then(info => {
    console.log('✓ OG image generated:', info.filename);
  })
  .catch(err => {
    console.error('✗ Failed to generate OG image:', err);
    process.exit(1);
  });
