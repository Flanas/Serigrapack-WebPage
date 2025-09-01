// src/App.js
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";
import { CATEGORIES } from "./data/categories";
import { WHATSAPP_NUMBER } from "./data/config";
import { useEffect, useState } from "react";
import { useCart } from "./hooks/useCart";
import "./App.css";

export default function App() {
  // basename makes GH Pages routing happy, while doing nothing locally.
  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <AppInner />
    </Router>
  );
}

function AppInner() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const [navOpen, setNavOpen] = useState(false);

  const {
    cart,
    cartDirty,
    loadingIds,
    toast,
    addToCart,
    removeFromCart,
    clearDirty,
  } = useCart();

  const location = useLocation();

  // Close the mobile category menu when navigating away from /catalog
  useEffect(() => {
    if (!location.pathname.startsWith("/catalog") && navOpen) {
      setNavOpen(false);
    }
  }, [location.pathname, navOpen]);

  const sendWhatsApp = () => {
    if (!cart.length) return;

    const lines = cart.map((it) => {
      const parts = [
        `- ${it.name}`,
        it.summary ? `(${it.summary})` : null,
        `x${it.qty ?? 1}`,
      ].filter(Boolean);

      const pricePart =
        typeof it.total === "number"
          ? `= $${it.total.toFixed(2)}`
          : it.price
          ? `— ${it.price}`
          : null;

      return [parts.join(" "), pricePart].filter(Boolean).join(" ");
    });

    const grandTotal = cart.reduce(
      (sum, it) => sum + (typeof it.total === "number" ? it.total : 0),
      0
    );

    const message =
      `Hola! Estoy interesado en los siguientes productos:\n` +
      lines.join("\n") +
      (grandTotal > 0 ? `\n\nTotal general: $${grandTotal.toFixed(2)}` : "") +
      `\n\nPor favor contáctenme para finalizar la compra.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Header
        cartCount={cart.length}
        cartDirty={cartDirty}
        clearDirty={clearDirty}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />

      <AppRoutes
        addToCart={addToCart}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        active={active}
        setActive={setActive}
        loadingIds={loadingIds}
        cart={cart}
        removeFromCart={removeFromCart}
        sendWhatsApp={sendWhatsApp}
      />

      {/* Toast */}
      <div
        aria-live="polite"
        className={
          "fixed left-1/2 -translate-x-1/2 bottom-6 px-4 py-3 rounded-xl shadow text-white transition " +
          (toast ? "bg-brandGreen opacity-100" : "opacity-0 pointer-events-none")
        }
      >
        {toast}
      </div>

      <footer className="max-w-6xl mx-auto px-6 pb-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Serigrapack — Hecho con ❤️
      </footer>
    </>
  );
}
