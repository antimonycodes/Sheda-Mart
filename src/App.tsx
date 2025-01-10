import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/shop/Homepage";
import Categories from "./pages/shop/Categories";
import Category from "./pages/shop/Category";
import P from "./pages/shop/P";
import Cart from "./pages/shop/Cart";
import Checkout from "./pages/Checkout";
import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav";
import Newsletter from "./components/Homepage/Newsletter";
import Footer from "./components/Footer";

function App() {
  const location = useLocation(); // Access current route

  // Check if the current path is '/select-payment' (Checkout page)
  const isCheckoutPage = location.pathname === "/select-payment";

  return (
    <>
      {/* Show Nav only if not on the Checkout page */}
      {!isCheckoutPage && <Nav />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categoryName" element={<Category />} />
        <Route path="/details" element={<P />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/select-payment" element={<Checkout />} />
      </Routes>

      <Toaster />

      {/* Show Newsletter and Footer only if not on the Checkout page */}
      {!isCheckoutPage && <Newsletter />}
      {!isCheckoutPage && <Footer />}
    </>
  );
}

export default App;
