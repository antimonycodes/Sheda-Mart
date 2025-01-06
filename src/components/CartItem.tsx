import { useState } from "react";
import deleteIcon from "../assets/deleteIcon.svg";
import addIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";
import retroShade from "../assets/retro-sunglass-2.png";
import itemTwo from "../assets/latest-img-1.png";
const CartItem = () => {
  //   const [screenSize, setScreenSize] = useState("");

  //   if (window.innerHeight < 740) {
  //     setScreenSize("Mobile");
  //   } else {
  //     setScreenSize("Desktop");
  //   }
  const cartItems = [
    {
      id: 1,
      name: "Closeup Retro Sunglasses For Women ",
      img: retroShade,
      price: 6000,
      discount: 600,
      stockValue: "low",
      quantity: 2,
    },
    {
      id: 2,
      name: "Closeup Retro Sunglasses For Women ",
      img: itemTwo,
      price: 10000,
      discount: 800,
      stockValue: "low",
      quantity: 3,
    },
  ];
  return (
    <div className=" flex flex-col md:flex-row gap-4 md:gap-24 md:justify-between px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16 ">
      <div className=" border border-[#D2D1D1] rounded-[10px]">
        <div className=" p-[10px]">
          <h1 className=" md:text-xl lg:text-2xl text-greyBody">
            {cartItems.length} item in your cart
          </h1>
        </div>
        <hr />
        {/* Cart Items */}
        <div className=" w-full ">
          {cartItems.map((item, id) => (
            <div key={id} className=" w-full border border-[#D2D1D1]  p-5">
              <div className=" flex flex-col md:flex-row justify-between gap-4">
                {/* details */}
                <div className=" flex md:flex-col items-center md:items-start  justify-between md:gap-2 ">
                  <div className=" flex justify-between  gap-4">
                    <div className=" w-14 h-14">
                      <img
                        src={item.img}
                        alt=""
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className=" flex flex-col justify-between text-greyTitle my-1">
                      <h1 className=" font-medium text-sm md:text-base">
                        {item.name}
                      </h1>
                      <p className=" text-xs">{item.stockValue} in stock</p>
                    </div>
                  </div>
                  <div>
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
                {/* quantity */}
                <div className=" flex md:flex-col justify-between">
                  {/*  Price */}
                  <div>
                    <h1 className=" text-greyTitle font-bold">
                      ${item.discount}
                    </h1>
                    <p className=" text-greyDisabled text-[10px]">
                      ${item.price}{" "}
                      <span className=" text-xs text-greycaption">
                        (10% off)
                      </span>
                    </p>
                  </div>
                  {/* Couunt */}
                  <div className=" flex items-center gap-4">
                    {/* count button */}
                    <div className=" flex items-center gap-2">
                      <div className=" bg-burgundy w-5 h-5 flex items-center justify-center">
                        <img src={minusIcon} alt="" />
                      </div>
                      <h1 className=" font-medium">{item.quantity}</h1>
                      <div className=" bg-burgundy w-5 h-5 flex items-center justify-center">
                        <img src={addIcon} alt="" />
                      </div>
                    </div>
                    {/* no of items */}
                    <div>
                      <h1 className=" text-xs text-[#0F0E0E]">
                        {item.quantity}
                        <span className=" inline text-[8px] text-[#403F3F]">
                          item(s) added
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <hr /> */}
              {/*  */}
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className=" border border-[#D2D1D1] rounded-[10px] h-fit flex-1">
        <h1 className=" text-xs  text-greyBody font-bold mx-3 my-2">
          CART SUMMARY
        </h1>
        <hr />
        {/* subtotal */}
        <div className=" flex items-center justify-between mx-3 my-4">
          <h2 className=" text-greySubtitle font-medium">Subtotal</h2>
          <h1 className=" md:text-xl text-greyTitle font-bold">$5000</h1>
        </div>
        {/* <hr /> */}
        <button className=" bg-surfaceLighter py-4 px6 w-full rounded-md font-bold text-xs text-white">
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};

export default CartItem;
