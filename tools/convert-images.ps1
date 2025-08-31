<#
 Converts PNG/JPG assets to WebP in-place, side-by-side.
 Requires either ImageMagick (`magick`) or Google `cwebp` in PATH.

 Usage:
   - Right-click -> Run with PowerShell (or run from repo root):
       powershell -ExecutionPolicy Bypass -File tools/convert-images.ps1

 It will scan `images/` recursively and write `*.webp` next to originals.
#>

param(
  [string]$Root = "images",
  [int]$Quality = 82
)

function Has-Command($name) { Get-Command $name -ErrorAction SilentlyContinue | ForEach-Object { $true } }

$useMagick = Has-Command magick
$useCwebp  = Has-Command cwebp

if (-not ($useMagick -or $useCwebp)) {
  Write-Host "No converter found. Install ImageMagick or libwebp (cwebp)." -ForegroundColor Yellow
  exit 1
}

Get-ChildItem -Path $Root -Recurse -Include *.png,*.jpg,*.jpeg | ForEach-Object {
  $src = $_.FullName
  $dst = [System.IO.Path]::ChangeExtension($src, 'webp')
  if (Test-Path $dst) { return }

  if ($useMagick) {
    & magick $src -quality $Quality -define webp:method=6 -strip $dst
  } elseif ($useCwebp) {
    & cwebp -q $Quality -mt $src -o $dst
  }
  if (Test-Path $dst) { Write-Host "Created" $dst }
}

Write-Host "Done. WebP files created alongside originals. Browser will auto-swap if supported." -ForegroundColor Green

