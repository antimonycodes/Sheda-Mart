import CartItem from "@/components/CartItem";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import Newsletter from "@/components/Homepage/Newsletter";

const Cart = () => {
  return (
    <div className=" space-y-24">
      <CartItem />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
};

export default Cart;
