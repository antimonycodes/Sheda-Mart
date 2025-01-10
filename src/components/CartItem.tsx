import { useState } from "react";
import deleteIcon from "../assets/deleteIcon.svg";
import addIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";
import retroShade from "../assets/retro-sunglass-2.png";
import itemTwo from "../assets/latest-img-1.png";
import { Link } from "react-router-dom";

const CartItem = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Closeup Retro Sunglasses For Women ",
      img: retroShade,
      price: 6000,
      discount: 6000 - 600,
      stockValue: "low",
      quantity: 2,
    },
    {
      id: 2,
      name: "Closeup Retro Sunglasses For Women ",
      img: itemTwo,
      price: 10000,
      discount: 10000 - 800,
      stockValue: "low",
      quantity: 3,
    },
  ]);

  const incrementQuantity = (id: any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id: any) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.discount * item.quantity,
      0
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full md:justify-between px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
      <div className="border border-[#D2D1D1] rounded-[10px] w-full md:w-2/3">
        <div className="p-[10px]">
          <h1 className="md:text-xl lg:text-2xl text-greyBody">
            {cartItems.length} item(s) in your cart
          </h1>
        </div>
        <hr />
        <div className="w-full">
          {cartItems.map((item) => (
            <div key={item.id} className="w-full border-b border-[#D2D1D1] p-5">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex md:flex-row items-center justify-between gap-4">
                  <div className="w-14 h-14 md:w-48">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between text-greyTitle">
                    <h1 className="font-medium text-sm truncate w-20 mobile:w-36 md:w-auto md:text-base">
                      {item.name}
                    </h1>
                    <p className="text-xs">{item.stockValue} in stock</p>
                  </div>
                  <button
                    className=" w-12 md:w-full"
                    onClick={() => deleteItem(item.id)}
                  >
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                </div>
                <div className="flex md:flex-col justify-between items-center">
                  <div>
                    <h1 className="text-greyTitle font-bold">
                      ₦{item.discount}
                    </h1>
                    <div className=" flex items-center gap-1">
                      <p className="text-greyDisabled text-[10px] line-through">
                        ₦{item.price}
                      </p>
                      <span className="text-xs text-greycaption">
                        {" "}
                        (10% off)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="bg-burgundy w-5 h-5 flex items-center justify-center"
                    >
                      <img src={minusIcon} alt="-" />
                    </button>
                    <h1 className="font-medium">{item.quantity}</h1>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="bg-burgundy w-5 h-5 flex items-center justify-center"
                    >
                      <img src={addIcon} alt="+" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-[#D2D1D1] rounded-[10px] h-fit p-5 w-full ">
        <h1 className="text-xs text-greyBody font-bold">CART SUMMARY</h1>
        <hr className="my-2" />
        <div className="flex items-center justify-between my-4">
          <h2 className="text-greySubtitle font-medium">Subtotal</h2>
          <h1 className="md:text-xl text-greyTitle font-bold">
            ₦{calculateSubtotal()}
          </h1>
        </div>
        <Link to="/select-payment">
          <button className="bg-surfaceLighter py-4 w-full rounded-md font-bold text-xs text-white">
            CONFIRM ORDER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
