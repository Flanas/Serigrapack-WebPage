// src/components/Header.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartIcon from "./icons/CartIcon";
import { asset } from "../utils/asset";

export default function Header({ cartCount, cartDirty, clearDirty, navOpen, setNavOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const onCatalog = location.pathname.startsWith("/catalog");

  const toggleMobileMenu = () => {
    if (onCatalog) {
      setNavOpen?.((v) => !v);
    } else {
      // Go to catalog and open the mobile menu
      navigate("/catalog");
      setNavOpen?.(true);
    }
  };

  const burgerOpen = Boolean(navOpen && onCatalog);

  return (
    <header className="sticky top-0 z-20" style={{ backgroundColor: "#101820" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={asset("/images/logo/serigrapack-logo.jpg")}
            alt="Serigrapack"
            className="h-12 md:h-16 w-auto"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <h1 className="font-title text-lg md:text-2xl font-bold">Serigrapack</h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link
            to="/"
            className={
              "text-sm " +
              (location.pathname === "/" ? "font-semibold" : "opacity-80 hover:opacity-100")
            }
          >
            Inicio
          </Link>
          <Link
            to="/catalog"
            className={"text-sm " + (onCatalog ? "font-semibold" : "opacity-80 hover:opacity-100")}
          >
            Catálogo
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Burger (mobile only) */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={burgerOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-nav"
            aria-expanded={burgerOpen}
            className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/20"
          >
            <span className="sr-only">Menú</span>
            <span className="relative block h-5 w-6">
              <span
                className={
                  "absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform duration-200 " +
                  (burgerOpen ? "translate-y-[10px] rotate-45" : "")
                }
              />
              <span
                className={
                  "absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-white transition-opacity duration-200 " +
                  (burgerOpen ? "opacity-0" : "opacity-100")
                }
              />
              <span
                className={
                  "absolute left-0 bottom-0 h-0.5 w-6 bg-white transition-transform duration-200 " +
                  (burgerOpen ? "-translate-y-[10px] -rotate-45" : "")
                }
              />
            </span>
          </button>

          {/* Cart */}
          <button
            onClick={() => {
              clearDirty();
              navigate("/cart");
            }}
            className="relative inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2"
            aria-label="Abrir carrito"
          >
            <CartIcon className="h-5 w-5" />
            <span className="text-sm">Carrito: {cartCount}</span>
            {cartDirty && (
              <span className="absolute -top-1 -right-1 inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
