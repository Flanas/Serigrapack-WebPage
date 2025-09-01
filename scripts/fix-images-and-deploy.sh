#!/usr/bin/env bash
set -euo pipefail

# ---- Helpers -------------------------------------------------------------
is_windows() {
  case "$(uname -s)" in
    MINGW*|MSYS*|CYGWIN*) return 0 ;;
    *) return 1 ;;
  esac
}

safe_git_mv() {
  local src="$1"; local dst="$2"
  if [[ ! -f "$src" ]]; then
    echo "WARN: $src not found; skipping"
    return 0
  fi
  mkdir -p "$(dirname "$dst")"
  if is_windows; then
    # Do a two-step rename to avoid case-only issues on Windows
    local tmp="${dst}.tmp.$$"
    git mv -f "$src" "$tmp"
    git mv -f "$tmp" "$dst"
  else
    git mv -f "$src" "$dst"
  fi
}

replace_in_src() {
  local old="$1"; local new="$2"
  # Escape nothing special (paths contain no # or &)
  local files
  # Only replace if it's referenced
  if ! files=$(grep -RIl --exclude-dir=node_modules -- "[$]old" src 2>/dev/null); then
    files=$(grep -RIl --exclude-dir=node_modules -- "$old" src || true)
  fi
  files=$(grep -RIl --exclude-dir=node_modules -- "$old" src || true)
  if [[ -z "${files}" ]]; then
    echo "  no references to $old found in src/ — ok"
    return 0
  fi
  echo "$files" | while read -r f; do
    if [[ -n "$f" ]]; then
      if [[ "$(uname -s)" == "Darwin" ]]; then
        sed -i '' -e "s#$old#$new#g" "$f"
      else
        sed -i -e "s#$old#$new#g" "$f"
      fi
      echo "  updated: $f"
    fi
  done
}

# ---- Pre-flight ----------------------------------------------------------
if [[ ! -d .git ]]; then
  echo "ERROR: Run this from your repo root (where .git exists)."
  exit 1
fi

# Make sure working tree is clean-ish
if [[ -n "$(git status --porcelain)" ]]; then
  echo "NOTE: You have local changes. They will be included in this branch/commit."
fi

# Optional but helps on Windows with renames
git config core.ignorecase true

branch="chore/image-normalization"
echo "==> Creating branch: $branch"
git checkout -B "$branch"

# ---- 1) Rename files on disk via git mv ---------------------------------
echo "==> Renaming product images"
safe_git_mv "public/images/products/Arruchada-Cambrela-1cint.jpg" "public/images/products/arruchada-cambrela-1cint.jpg"
safe_git_mv "public/images/products/ArruchadaArubaUnacinta.jpg" "public/images/products/arruchadaarubaunacinta.jpg"
safe_git_mv "public/images/products/ArruchadaDuraznocinta.jpg" "public/images/products/arruchadaduraznocinta.jpg"
safe_git_mv "public/images/products/ArruchadaDuraznodoblecinta.jpg" "public/images/products/arruchadaduraznodoblecinta.jpg"
safe_git_mv "public/images/products/ArruchadaSatinFull.jpg" "public/images/products/arruchadasatinfull.jpg"
safe_git_mv "public/images/products/ArruchadaTerciopeloDoblecinta.jpg" "public/images/products/arruchadaterciopelodoblecinta.jpg"
safe_git_mv "public/images/products/ArruchadaTerciopeloUnacinta.jpg" "public/images/products/arruchadaterciopelounacinta.jpg"
safe_git_mv "public/images/products/cartuchera-camb-Full Color.jpg" "public/images/products/cartuchera-camb-full-color.jpg"
safe_git_mv "public/images/products/Listones.jpg" "public/images/products/listones.jpg"
safe_git_mv "public/images/products/SportbadLiencillocordon.jpg" "public/images/products/sportbadliencillocordon.jpg"
safe_git_mv "public/images/products/tote-GabardinaPes.jpg" "public/images/products/tote-gabardinapes.jpg"
safe_git_mv "public/images/products/tote-GabardinaPesLogo.jpg" "public/images/products/tote-gabardinapeslogo.jpg"
safe_git_mv "public/images/products/tote-liencilloAsa.jpg" "public/images/products/tote-liencilloasa.jpg"
safe_git_mv "public/images/products/tote-recto-AsaBase.jpg" "public/images/products/tote-recto-asabase.jpg"
safe_git_mv "public/images/products/ToteLiencillologo.jpg" "public/images/products/toteliencillologo.jpg"
safe_git_mv "public/images/products/ToteLiencillologoArubaFullColor.jpg" "public/images/products/toteliencillologoarubafullcolor.jpg"
safe_git_mv "public/images/products/ToteLiencillologoFullColor.jpg" "public/images/products/toteliencillologofullcolor.jpg"

echo "==> Renaming 'CATALOGOS SERIGRAPACK …' images"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_02_Image_0001.jpg" "public/images/products/catalogos-serigrapack_page_02_image_0001.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_07_Image_0001.jpg" "public/images/products/catalogos-serigrapack_page_07_image_0001.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_09_Image_0002.jpg" "public/images/products/catalogos-serigrapack_page_09_image_0002.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_21_Image_0002.jpg" "public/images/products/catalogos-serigrapack_page_21_image_0002.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_21_Image_0003.jpg" "public/images/products/catalogos-serigrapack_page_21_image_0003.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_22_Image_0001.jpg" "public/images/products/catalogos-serigrapack_page_22_image_0001.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_28_Image_0002.jpg" "public/images/products/catalogos-serigrapack_page_28_image_0002.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_39_Image_0001.jpg" "public/images/products/catalogos-serigrapack_page_39_image_0001.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_47_Image_0002.jpg" "public/images/products/catalogos-serigrapack_page_47_image_0002.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_48_Image_0002.jpg" "public/images/products/catalogos-serigrapack_page_48_image_0002.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_49_Image_0001.jpg" "public/images/products/catalogos-serigrapack_page_49_image_0001.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_51_Image_0001.jpg" "public/images/products/catalogos-serigrapack_page_51_image_0001.jpg"
safe_git_mv "public/images/products/CATALOGOS SERIGRAPACK_Page_52_Image_0001.jpg" "public/images/products/catalogos-serigrapack_page_52_image_0001.jpg"

echo "==> Renaming logo images and removing stray .exe"
safe_git_mv "public/images/logo/Logo FB-100.jpg" "public/images/logo/logo-fb-100.jpg" || true
safe_git_mv "public/images/logo/Logo icon-100.jpg" "public/images/logo/logo-icon-100.jpg" || true
if [[ -f "public/images/logo/WhatsApp Installer.exe" ]]; then
  git rm -f "public/images/logo/WhatsApp Installer.exe" || true
fi

# Ensure .exe ignored going forward
if ! grep -qE '^\*\.exe$' .gitignore 2>/dev/null; then
  echo "*.exe" >> .gitignore
  git add .gitignore
fi

# ---- 2) Update code references in src/ -----------------------------------
echo "==> Rewriting image paths in code (src/)"
declare -a OLD_NEW=(
  "/images/products/Arruchada-Cambrela-1cint.jpg#/images/products/arruchada-cambrela-1cint.jpg"
  "/images/products/ArruchadaArubaUnacinta.jpg#/images/products/arruchadaarubaunacinta.jpg"
  "/images/products/ArruchadaDuraznocinta.jpg#/images/products/arruchadaduraznocinta.jpg"
  "/images/products/ArruchadaDuraznodoblecinta.jpg#/images/products/arruchadaduraznodoblecinta.jpg"
  "/images/products/ArruchadaSatinFull.jpg#/images/products/arruchadasatinfull.jpg"
  "/images/products/ArruchadaTerciopeloDoblecinta.jpg#/images/products/arruchadaterciopelodoblecinta.jpg"
  "/images/products/ArruchadaTerciopeloUnacinta.jpg#/images/products/arruchadaterciopelounacinta.jpg"
  "/images/products/cartuchera-camb-Full Color.jpg#/images/products/cartuchera-camb-full-color.jpg"
  "/images/products/Listones.jpg#/images/products/listones.jpg"
  "/images/products/SportbadLiencillocordon.jpg#/images/products/sportbadliencillocordon.jpg"
  "/images/products/tote-GabardinaPes.jpg#/images/products/tote-gabardinapes.jpg"
  "/images/products/tote-GabardinaPesLogo.jpg#/images/products/tote-gabardinapeslogo.jpg"
  "/images/products/tote-liencilloAsa.jpg#/images/products/tote-liencilloasa.jpg"
  "/images/products/tote-recto-AsaBase.jpg#/images/products/tote-recto-asabase.jpg"
  "/images/products/ToteLiencillologo.jpg#/images/products/toteliencillologo.jpg"
  "/images/products/ToteLiencillologoArubaFullColor.jpg#/images/products/toteliencillologoarubafullcolor.jpg"
  "/images/products/ToteLiencillologoFullColor.jpg#/images/products/toteliencillologofullcolor.jpg"
)
for pair in "${OLD_NEW[@]}"; do
  old="${pair%%#*}"; new="${pair##*#}"
  echo "  $old -> $new"
  replace_in_src "$old" "$new"
done

# ---- 3) Commit & push ----------------------------------------------------
echo "==> Staging and committing"
git add -A
git commit -m "Normalize image filenames for GitHub Pages; update src references; ignore .exe"

echo "==> Pushing branch"
git push -u origin "$branch"

echo "==> Merging into main"
git checkout main
git pull --ff-only
git merge --no-edit "$branch"
git push origin main

# ---- 4) Deploy -----------------------------------------------------------
echo "==> Deploying to GitHub Pages"
npm run deploy

echo "✅ Done! If something looks off, run: git log -p | less"
