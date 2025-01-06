import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Homepage from "./pages/shop/Homepage";
import Categories from "./pages/shop/Categories";
import Category from "./pages/shop/Category";
// import ProductDetails from "./pages/shop/ProductDetails";
// import ProductDetailsTwo from "./pages/shop/ProductDetailsTwo";
import P from "./pages/shop/P";
import Cart from "./pages/shop/Cart";
import Newsletter from "./components/Homepage/Newsletter";

function App() {
  return (
    <>
      {/* <Homepage /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categoryName" element={<Category />} />
        {/* <Route path="/details" element={<ProductDetails />} /> */}
        {/* <Route path="/details" element={<ProductDetailsTwo />} /> */}
        <Route path="/details" element={<P />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
