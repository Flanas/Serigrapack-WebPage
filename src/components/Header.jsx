// src/components/Header.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartIcon from "./icons/CartIcon";
import { asset } from "../utils/asset";

export default function Header({
  cartCount,
  cartDirty,
  clearDirty,
  navOpen,
  setNavOpen,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const onCatalog = location.pathname.startsWith("/catalog");

  const toggleMobileMenu = () => {
    if (onCatalog) {
      setNavOpen?.((v) => !v);
    } else {
      navigate("/catalog");
      setNavOpen?.(true);
    }
  };

  const burgerOpen = Boolean(navOpen && onCatalog);

  const linkBase =
    "px-2 py-1 rounded-md transition-colors text-xs md:text-sm tracking-wide";
  const inactive = "text-white/90 hover:text-white hover:bg-white/10";
  const active = "text-white bg-white/20";

  return (
    <header className="sticky top-0 z-20 bg-brandBrown">
      <div className="max-w-6xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between text-white">
        {/* Logo / brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={asset("/images/logo/serigrapack-logo.jpg")}
            alt="Serigrapack"
            className="h-10 md:h-12 w-auto"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <h1 className="font-title text-base md:text-xl font-semibold">
            Serigrapack
          </h1>
        </Link>

        {/* Desktop nav (sm and up) */}
        <nav className="hidden sm:flex items-center gap-3">
          <Link
            to="/"
            className={`${linkBase} ${
              location.pathname === "/" ? active : inactive
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/catalog"
            className={`${linkBase} ${onCatalog ? active : inactive}`}
          >
            Catálogo
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Burger (mobile only) */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={burgerOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-nav"
            aria-expanded={burgerOpen}
            className="sm:hidden inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-white/25 bg-white/5 hover:bg-white/10"
          >
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
            <span className="text-xs font-medium">Menú</span>
          </button>

          {/* Cart */}
          <button
            onClick={() => {
              clearDirty();
              navigate("/cart");
            }}
            className="relative inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 hover:bg-white/10 px-3 py-2"
            aria-label="Abrir carrito"
          >
            <CartIcon className="h-5 w-5" />
            <span className="text-xs md:text-sm">Carrito: {cartCount}</span>
            {cartDirty && (
              <span className="absolute -top-1 -right-1 inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
