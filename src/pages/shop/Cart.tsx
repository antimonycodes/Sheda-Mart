import CartItem from "@/components/CartItem";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";

const Cart = () => {
  return (
    <div className=" space-y-24">
      <CartItem />
      <FeaturedProducts />
    </div>
  );
};

export default Cart;
