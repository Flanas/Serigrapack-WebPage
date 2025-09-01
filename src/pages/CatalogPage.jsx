// src/pages/CatalogPage.jsx
import { useMemo } from "react";
import { CATEGORIES } from "../data/categories";
import { PRODUCTS } from "../data/products";
import { toTitle } from "../utils/strings";
import PriceSelector from "../components/PriceSelector";
import { asset } from "../utils/asset";

export default function CatalogPage({
  addToCart,
  navOpen,
  setNavOpen,
  active,
  setActive,
  loadingIds,
}) {
  const visibleProducts = useMemo(
    () => PRODUCTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <>
      {/* Desktop category nav */}
      <nav
        className="hidden md:block border-t border-white/10"
        style={{ backgroundColor: "#101820" }}
      >
        <ul className="max-w-6xl mx-auto px-6 py-2 flex gap-4 text-sm text-white">
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === active;
            return (
              <li key={cat.id}>
                <button
                  onClick={() => setActive(cat.id)}
                  className={
                    "px-0 py-2 border-b-2 transition-colors normal-case " +
                    (isActive
                      ? "border-brandGreen text-white"
                      : "border-transparent text-white/90 hover:text-white")
                  }
                >
                  {toTitle(cat.name)}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile collapsible nav */}
      {navOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-white/10"
          style={{ backgroundColor: "#101820" }}
        >
          <ul className="px-6 py-3 space-y-2 text-white">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === active;
              return (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      setActive(cat.id);
                      setNavOpen(false);
                    }}
                    className={
                      "w-full text-left py-2 border-b transition-colors normal-case " +
                      (isActive
                        ? "border-brandGreen text-white"
                        : "border-white/10 text-white/90 hover:text-white")
                    }
                  >
                    {toTitle(cat.name)}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Product grid */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {visibleProducts.length === 0 ? (
          <div className="text-center py-20 opacity-70">
            No hay productos en esta categoría aún.
          </div>
        ) : (
          <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {visibleProducts.map((product) => {
              const isLoading = loadingIds.has(product.id);
              return (
                <article
                  key={product.id}
                  className="relative bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-4 flex flex-col min-h-[380px]"
                >
                  {/* Loading overlay when adding */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-white/60 rounded-2xl grid place-items-center z-10">
                      <span className="inline-block h-6 w-6 border-2 border-black/40 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}

                  <div className="w-full aspect-[4/3] bg-white border border-black/5 rounded-xl mb-4 grid place-items-center p-2">
                    <img
                      src={asset(product.image)}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <h2 className="font-title text-lg font-semibold">
                    {product.name}
                  </h2>

                  {/* Optional description (since price now lives in PriceSelector) */}
                  {product.description ? (
                    <p className="text-sm text-brandText/70 mt-1">
                      {product.description}
                    </p>
                  ) : null}

                  <div className="mt-auto">
                    <PriceSelector
                      productId={product.id}
                      addToCartLabel="Agregar con esta opción"
                      onSelect={(sel) => {
                        // Build a line item for the cart; keep original id for loading state
                        const lineItem = {
                          ...product,
                          name: `${product.name} — ${sel.label}`,
                          // Keep a human price string if available (cart also keeps numeric totals)
                          price:
                            sel?.price != null
                              ? `$${Number(sel.price).toFixed(2)}`
                              : undefined,
                          selection: sel, // keep full selection for CartPage
                        };
                        addToCart(lineItem);
                      }}
                      className="mt-3"
                    />
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </main>
    </>
  );
}
