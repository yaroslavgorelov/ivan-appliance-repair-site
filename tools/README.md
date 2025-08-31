Image optimization tools
========================

What this does
- Converts PNG/JPG under `images/` to WebP next to originals.
- Frontend will swap to `.webp` automatically at runtime if supported and file exists.

How to use (Windows / PowerShell)
1) Install one of:
   - ImageMagick (magick) OR
   - Google libwebp tools (cwebp)
2) Run:
   powershell -ExecutionPolicy Bypass -File tools/convert-images.ps1

Notes
- The script writes `image.webp` next to `image.png`.
- No HTML changes needed: images with class `auto-webp` will switch to WebP automatically.
- Safe: if a WebP is missing or the browser doesn’t support it, PNG/JPG stays in use.

