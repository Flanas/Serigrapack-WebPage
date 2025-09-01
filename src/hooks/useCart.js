// src/hooks/useCart.js
import { useState } from "react";

/**
 * Line item canonical shape (what the cart stores):
 * {
 *   _id: string,                  // internal unique id
 *   productId: string,            // from product.id
 *   name: string,                 // product name
 *   image?: string,               // product image
 *   summary?: string|null,        // variant summary like "12×12 · FC 25×25"
 *   qty: number,                  // quantity (respects min in UI)
 *   unitPrice?: number|null,      // per-unit price if known
 *   total?: number|null,          // computed total if known (qty * unitPrice)
 *   price?: string|null           // legacy display price string (fallback)
 * }
 */

export function useCart() {
  const [cart, setCart] = useState([]);
  const [cartDirty, setCartDirty] = useState(false);
  const [loadingIds, setLoadingIds] = useState(new Set());
  const [toast, setToast] = useState("");

  // Normalize both legacy product objects and new line items
  const normalizeToLineItem = (item) => {
    // New style coming from PriceSelector already has productId
    if (item && item.productId) {
      return {
        _id: `${item.productId}-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 7)}`,
        productId: item.productId,
        name: item.name,
        image: item.image,
        summary: item.summary ?? null,
        qty: Number.isFinite(item.qty) ? item.qty : 1,
        unitPrice:
          typeof item.unitPrice === "number" ? item.unitPrice : null,
        total: typeof item.total === "number" ? item.total : null,
        // keep optional legacy display price if present
        price: item.price ?? null,
      };
    }

    // Legacy style: full product object with { id, name, price, image }
    return {
      _id: `${item.id}-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 7)}`,
      productId: item.id,
      name: item.name,
      image: item.image,
      summary: null,
      qty: 1,
      unitPrice: null,
      total: null,
      price: item.price ?? null,
    };
  };

  const addToCart = (item) => {
    const lineItem = normalizeToLineItem(item);
    const loadingKey = lineItem.productId;

    setLoadingIds((prev) => new Set(prev).add(loadingKey));

    // Simulate async add (keeps your spinner/toast timing)
    setTimeout(() => {
      setCart((prev) => [...prev, lineItem]);
      setCartDirty(true);

      setLoadingIds((prev) => {
        const next = new Set(prev);
        next.delete(loadingKey);
        return next;
      });

      setToast("Producto agregado a tu carrito");
      setTimeout(() => setToast(""), 1600);
    }, 650);
  };

  const removeFromCart = (idx) =>
    setCart((prev) => prev.filter((_, i) => i !== idx));

  const clearDirty = () => setCartDirty(false);

  return {
    cart,
    cartDirty,
    loadingIds,
    toast,
    addToCart,
    removeFromCart,
    clearDirty,
    setToast,
  };
}
