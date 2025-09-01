// src/pages/CartPage.jsx
import { Link } from "react-router-dom";
import CartIcon from "../components/icons/CartIcon";

function toMoney(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return null;
  return n.toLocaleString("es-EC", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

export default function CartPage({ cart, removeFromCart, sendWhatsApp }) {
  const grandTotal = cart.reduce(
    (sum, it) => sum + (typeof it.total === "number" ? it.total : 0),
    0
  );

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="font-title text-2xl md:text-3xl font-bold mb-2">Tu carrito</h2>
      <p className="text-sm text-brandText/70 mb-6">
        Por el momento, las compras a través de la web se gestionan vía WhatsApp con un
        representante de Serigrapack.
      </p>

      {cart.length === 0 ? (
        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="mb-4">Tu carrito está vacío.</p>
          <Link to="/catalog" className="rounded-xl bg-brandGreen text-white px-4 py-2">
            Ver catálogo
          </Link>
        </div>
      ) : (
        <>
          <ul className="space-y-3 mb-6">
            {cart.map((item, idx) => {
              const unitPriceStr =
                typeof item.unitPrice === "number" ? toMoney(item.unitPrice) : null;
              const totalStr =
                typeof item.total === "number" ? toMoney(item.total) : null;

              return (
                <li
                  key={item._id || `${item.productId || item.id}-${idx}`}
                  className="bg-white rounded-xl p-3 shadow flex items-center gap-3"
                >
                  <div className="h-14 w-14 bg-white border border-black/5 rounded-lg grid place-items-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{item.name}</div>
                    {item.summary && (
                      <div className="text-xs text-brandText/70 truncate">{item.summary}</div>
                    )}
                    <div className="mt-0.5 text-xs text-brandText/70">
                      Cantidad: <span className="font-medium">{item.qty ?? 1}</span>
                    </div>

                    {/* Prices */}
                    <div className="mt-1 text-sm">
                      {totalStr ? (
                        <>
                          {unitPriceStr && (
                            <div className="text-brandText/80">
                              Unitario: <span className="font-medium">{unitPriceStr}</span>
                            </div>
                          )}
                          <div className="text-brandBrown">
                            Total: <span className="font-bold">{totalStr}</span>
                          </div>
                        </>
                      ) : (
                        // Legacy fallback: show original display price string if no structured pricing
                        item.price && <div className="text-brandBrown font-bold">{item.price}</div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(idx)}
                    className="text-sm underline hover:opacity-80 shrink-0"
                  >
                    quitar
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Order summary */}
          <div className="rounded-2xl bg-white p-4 shadow mb-6 flex items-center justify-between">
            <div className="text-sm text-brandText/80">
              {cart.length} {cart.length === 1 ? "ítem" : "ítems"}
            </div>
            <div className="text-base">
              Total general:{" "}
              <span className="font-bold text-brandBrown">
                {grandTotal > 0 ? toMoney(grandTotal) : "—"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={sendWhatsApp}
              className="inline-flex items-center gap-2 rounded-xl bg-brandText text-white px-5 py-3 hover:opacity-90"
            >
              <CartIcon className="h-5 w-5" />
              Enviar pedido por WhatsApp
            </button>
            <Link
              to="/catalog"
              className="rounded-xl bg-brandGreen text-white px-5 py-3 hover:opacity-90"
            >
              Seguir comprando
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
