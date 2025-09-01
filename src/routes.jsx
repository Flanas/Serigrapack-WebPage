import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage {...props} />} />
      <Route path="/cart" element={<CartPage {...props} />} />
    </Routes>
  );
}
