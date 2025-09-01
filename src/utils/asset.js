// src/utils/asset.js
export function asset(p) {
  const base = (process.env.PUBLIC_URL || "").replace(/\/+$/, "");
  return `${base}/${String(p).replace(/^\/+/, "")}`;
}
