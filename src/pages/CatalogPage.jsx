// src/pages/CatalogPage.jsx
import { useMemo, useEffect } from "react";
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
  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (!navOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [navOpen]);

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

      {/* Mobile overlay nav (fixed, opens anywhere) */}
      {navOpen && (
        <div id="mobile-nav" className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <button
            aria-label="Cerrar menú"
            onClick={() => setNavOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          {/* Sheet */}
          <nav
            className="absolute top-0 left-0 right-0 max-h-[80vh] overflow-auto
                       rounded-b-2xl border-b border-white/10 shadow-lg"
            style={{ backgroundColor: "#101820" }}
          >
            <ul className="px-6 py-4 space-y-1 text-white text-sm">
              <li className="pb-2 text-white/70 text-xs tracking-wide">
                Elige una categoría
              </li>
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
                        "w-full text-left py-2 px-2 rounded-lg transition-colors " +
                        (isActive
                          ? "bg-brandGreen/20 text-white"
                          : "text-white/90 hover:bg-white/10 hover:text-white")
                      }
                    >
                      {toTitle(cat.name)}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2">
                <button
                  onClick={() => setNavOpen(false)}
                  className="w-full py-2 px-2 rounded-lg bg-white/10 hover:bg.white/20 text-white/90"
                >
                  Cerrar
                </button>
              </li>
            </ul>
          </nav>
        </div>
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

                  {/* Optional description */}
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
                        const lineItem = {
                          ...product,
                          name: `${product.name} — ${sel.label}`,
                          price:
                            sel?.price != null
                              ? `$${Number(sel.price).toFixed(2)}`
                              : undefined,
                          selection: sel,
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
