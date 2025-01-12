import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/shop/Homepage";
import Categories from "./pages/shop/Categories";
import Category from "./pages/shop/Category";
import P from "./pages/shop/P";
import Cart from "./pages/shop/Cart";
import Checkout from "./pages/Checkout";
import { Toaster } from "react-hot-toast";
// import Nav from "./components/Nav";
// import Newsletter from "./components/Homepage/Newsletter";
// import Footer from "./components/Footer";
import AdminLayout from "./Layout/AdminLayout";
import UserLayout from "./Layout/UserLayout";
import Dashboard from "./pages/admin/Dashboard";

import ProductsList from "./pages/admin/ProductsList";
import AddProducts from "./pages/admin/AddProducts";
import ProductsCategory from "./pages/admin/ProductsCategory";
import OrdersList from "./pages/admin/OrdersList";
import OrdersDetails from "./pages/admin/OrdersDetails";
import CustomersList from "./pages/admin/CustomersList";
import CustomerDetails from "./pages/admin/CustomerDetails";

function App() {
  const location = useLocation(); // Access current route

  // Check if the current path is '/select-payment' (Checkout page)
  // const isCheckoutPage = location.pathname === "/select-payment";

  return (
    <>
      <Toaster />
      <Routes>
        {/* Show Nav only if not on the Checkout page */}
        {/* {!isCheckoutPage && <Nav />} */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categoryName" element={<Category />} />
          <Route path="/details" element={<P />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Show Newsletter and Footer only if not on the Checkout page */}
          {/* {!isCheckoutPage && <Newsletter />} */}
          {/* {!isCheckoutPage && <Footer />} */}
        </Route>
        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="products/list" element={<ProductsList />} />
          <Route path="products/add" element={<AddProducts />} />
          <Route path="products/category" element={<ProductsCategory />} />
          <Route path="orders/list" element={<OrdersList />} />
          <Route path="orders/details" element={<OrdersDetails />} />
          <Route path="customers/list" element={<CustomersList />} />
          <Route path="customers/details" element={<CustomerDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
