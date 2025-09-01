// src/components/PriceSelector.jsx
import React, { useMemo, useState, useEffect } from "react";
import { PRICES } from "../data/prices";

/**
 * Flexible PriceSelector
 * Supported PRICES shapes per productId:
 *  A) Simple options:
 *     { options: [{ label: "PLANITAS 10x10 · 200 UNIDADES", qty: 200, price: 44.00, unit: "UNIDADES", minQty?: number }] }
 *
 *  B) Variants -> options:
 *     { variants: { "1 color": { options: [...] }, "Full color": { options: [...] } } }
 *
 *  C) Variants -> sizes -> tiers:
 *     {
 *       variants: {
 *         "Full color": {
 *           sizes: [
 *             { label: "23 x 30 cm", tiers: [{ qty: 50, price: 55.00 }, { qty: 100, price: 70.00 }] }
 *           ],
 *           unit: "UNIDADES" // optional default unit
 *         }
 *       }
 *     }
 *
 * When tiers exist, we render a second dropdown for the tier (qty/price).
 */

export default function PriceSelector({
  productId,
  onSelect,           // (payload) => void
  addToCartLabel = "Agregar con esta opción",
  className = "",
}) {
  // ----- Read raw pricing -----
  const pricing = PRICES[productId];

  // Helpful warning while wiring things up
  if (!pricing) {
    // eslint-disable-next-line no-console
    console.warn("PriceSelector: no PRICES entry for", productId);
  }

  // ----- Stable derivations (no conditional hooks) -----
  const hasPricing = !!pricing;
  const variantKeys = useMemo(
    () => (hasPricing && pricing.variants ? Object.keys(pricing.variants) : []),
    [hasPricing, pricing]
  );

  // chosen variant / size / tier state
  const [variantKey, setVariantKey] = useState(
    variantKeys.length ? variantKeys[0] : ""
  );

  // current variant data (or the root pricing when no variants)
  const currentVariant = useMemo(() => {
    if (!hasPricing) return null;
    if (pricing.variants) {
      return pricing.variants[variantKey] || pricing.variants[variantKeys[0]] || null;
    }
    return pricing;
  }, [hasPricing, pricing, variantKey, variantKeys]);

  // Build a normalized list of "display options" the user can choose
  // Each option becomes: { id, label, qty, price, unit, minQty, meta }
  const baseOptions = useMemo(() => {
    if (!currentVariant) return [];

    // Case A/B: options array present
    if (Array.isArray(currentVariant.options)) {
      return currentVariant.options.map((o, idx) => ({
        id: `opt-${idx}`,
        label: o.label ?? buildLabel(o),
        qty: o.qty ?? undefined,
        price: o.price ?? undefined,
        unit: o.unit ?? currentVariant.unit ?? "UNIDADES",
        minQty: o.minQty,
        meta: { type: "option", raw: o },
      }));
    }

    // Case C: sizes with tiers
    if (Array.isArray(currentVariant.sizes)) {
      const unit = currentVariant.unit ?? "UNIDADES";
      const rows = [];
      currentVariant.sizes.forEach((s, sIdx) => {
        if (Array.isArray(s.tiers) && s.tiers.length) {
          s.tiers.forEach((t, tIdx) => {
            rows.push({
              id: `size-${sIdx}-tier-${tIdx}`,
              label: `${s.label} · ${t.qty} ${unit}`,
              qty: t.qty,
              price: t.price,
              unit,
              minQty: s.minQty ?? currentVariant.minQty,
              meta: { type: "size-tier", size: s, tier: t },
            });
          });
        } else {
          // size without tiers, treat as one option (if it has price)
          rows.push({
            id: `size-${sIdx}`,
            label: s.label,
            qty: s.qty,
            price: s.price,
            unit,
            minQty: s.minQty ?? currentVariant.minQty,
            meta: { type: "size", size: s },
          });
        }
      });
      return rows;
    }

    // Fallback: not structured yet
    return [];
  }, [currentVariant]);

  // Pick first option by default
  const [selectedId, setSelectedId] = useState(
    baseOptions.length ? baseOptions[0].id : ""
  );

  // Keep selected option valid if list changes
  const selected = useMemo(() => {
    if (!baseOptions.length) return null;
    const found = baseOptions.find((o) => o.id === selectedId);
    return found ?? baseOptions[0];
  }, [baseOptions, selectedId]);

  // Quantity input: only shown when we have minQty or when you want custom quantities (e.g., boxes)
  const hasMinQty = !!(selected && selected.minQty);
  const [qtyInput, setQtyInput] = useState(
    selected?.minQty ? selected.minQty : selected?.qty ?? 1
  );

  // Sync qtyInput if selection changes
  useEffect(() => {
    if (!selected) return;
    setQtyInput(selected.minQty ? selected.minQty : selected.qty ?? 1);
  }, [selected]);

  if (!hasPricing) {
    return (
      <div className={className}>
        <p className="text-sm text-red-600">Precio a consultar.</p>
      </div>
    );
  }

  // ----- Handlers -----
  const handleConfirm = () => {
    if (!selected) return;

    const payload = {
      productId,
      variant: pricing.variants ? variantKey : undefined,
      selectionId: selected.id,
      label: selected.label,
      unit: selected.unit,
      unitQty: selected.qty,     // if the row itself encodes a qty (e.g., 200 UNIDADES)
      minQty: selected.minQty,
      // For cart math, "count" is how many packs/units the user wants to order:
      count: hasMinQty ? Number(qtyInput || selected.minQty || 1) : 1,
      // price shown is the listed price for that option/tier:
      price: selected.price,
      meta: selected.meta,
    };

    onSelect?.(payload);
  };

  // ----- UI -----
  return (
    <div className={`space-y-2 ${className}`}>
      {/* Variants select (if any) */}
      {variantKeys.length > 0 && (
        <div className="flex flex-col">
          <label className="text-xs mb-1 opacity-70">Variante</label>
          <select
            className="rounded-lg border border-black/10 px-3 py-2 bg-white"
            value={variantKey}
            onChange={(e) => setVariantKey(e.target.value)}
          >
            {variantKeys.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Option/Size-Tier select */}
      <div className="flex flex-col">
        <label className="text-xs mb-1 opacity-70">Medida / Paquete</label>
        <select
          className="rounded-lg border border-black/10 px-3 py-2 bg-white"
          value={selected?.id ?? ""}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          {baseOptions.map((o) => (
            <option key={o.id} value={o.id}>
              {formatOption(o)}
            </option>
          ))}
        </select>
      </div>

      {/* Quantity input when minQty applies (e.g., cajas: mínimo 50) */}
      {hasMinQty && (
        <div className="flex flex-col">
          <label className="text-xs mb-1 opacity-70">
            Cantidad (mínimo {selected.minQty})
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-3 py-2 rounded-lg border border-black/10"
              onClick={() =>
                setQtyInput((q) => Math.max(selected.minQty, Number(q || 0) - 1))
              }
            >
              –
            </button>
            <input
              type="number"
              min={selected.minQty}
              className="w-24 rounded-lg border border-black/10 px-3 py-2"
              value={qtyInput}
              onChange={(e) =>
                setQtyInput(() =>
                  Math.max(selected.minQty, Number(e.target.value || 0))
                )
              }
            />
            <button
              type="button"
              className="px-3 py-2 rounded-lg border border-black/10"
              onClick={() =>
                setQtyInput((q) => Math.max(selected.minQty, Number(q || 0) + 1))
              }
            >
              +
            </button>
          </div>
          <p className="text-xs opacity-70 mt-1">
            Unidad: {selected.unit ?? "UNIDADES"}
          </p>
        </div>
      )}

      {/* Price preview */}
      {selected?.price != null && (
        <div className="text-sm">
          <span className="opacity-70">Precio:</span>{" "}
          <strong>${number(selected.price)}</strong>
          {selected.qty ? (
            <span className="opacity-70"> · {selected.qty} {selected.unit ?? "UNIDADES"}</span>
          ) : null}
        </div>
      )}

      <button
        type="button"
        onClick={handleConfirm}
        className="mt-1 inline-flex items-center justify-center rounded-xl px-4 py-2 bg-brandText text-white hover:opacity-90"
      >
        {addToCartLabel}
      </button>
    </div>
  );
}

/* ------------ helpers ------------ */

function number(n) {
  try {
    return Number(n).toFixed(2);
  } catch {
    return n;
  }
}

function buildLabel(o) {
  const bits = [];
  if (o.label) bits.push(o.label);
  if (!o.label && o.size) bits.push(o.size);
  if (o.qty) bits.push(`${o.qty} ${o.unit ?? "UNIDADES"}`);
  return bits.join(" · ");
}

function formatOption(o) {
  const price = o.price != null ? `$${number(o.price)}` : "—";
  if (o.qty) {
    return `${o.label} · ${price}`;
  }
  return `${o.label ?? ""} ${price !== "—" ? "· " + price : ""}`.trim();
}
