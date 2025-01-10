import { useState } from "react";
import secure from "../assets/Secure.png";
// import Checkmark from "../assets/Checkmark.png";
import arrow from "../assets/arrowright.svg";
import toast from "react-hot-toast";
import wallet from "../assets/Vectorwallet.png";
import visa from "../assets/Vectorvisa.png";
import mastercard from "../assets/Vectorvisa.png";
import { Stepper } from "@/components/payment/Stepper";
import { Link } from "react-router-dom";

interface Step {
  id: number;
  name: string;
}

interface CheckedSections {
  address: boolean;
  delivery: boolean;
  payOnDelivery: boolean;
  prePayNow: boolean;
}

interface CustomCheckboxProps {
  section: keyof CheckedSections;
  isPink?: boolean;
}

const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const steps: Step[] = [
    { id: 1, name: "Shipping" },
    { id: 2, name: "Payment" },
    { id: 3, name: "Review" },
  ];

  // const [paymentMethod, setPaymentMethod] = useState<string>("pay_on_delivery");
  const [promoCode, setPromoCode] = useState<string>("");
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [checkedSections, setCheckedSections] = useState<CheckedSections>({
    address: false,
    delivery: false,
    payOnDelivery: false,
    prePayNow: false,
  });

  const subtotal: number = 5500;
  const deliveryFee: number = 1000;
  const total: number = promoApplied
    ? subtotal + deliveryFee - 500
    : subtotal + deliveryFee;

  const applyPromoCode = (): void => {
    if (promoCode === "DISCOUNT500") {
      setPromoApplied(true);
      toast("Promo code applied!");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const handleCheckboxChange = (section: keyof CheckedSections): void => {
    setCheckedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    section,
    isPink,
  }) => (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checkedSections[section]}
          onChange={() => handleCheckboxChange(section)}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 border-2 rounded-full transition-all duration-200 ${
            checkedSections[section]
              ? isPink
                ? "bg-[#800020] border-[#800020]"
                : "border-[#008500] bg-[#008500]"
              : "border-gray-300 bg-white"
          }`}
        >
          <svg
            className={`w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${
              checkedSections[section] ? "scale-100" : "scale-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
    </label>
  );

  return (
    <div className="w-full bg-gray-50 min-h-screen py-2 px-4 md:px-16">
      <div className="flex items-center gap-6 w-full flex-col  justify-between mb-16">
        <div className="w-full h-fit  flex items-center gap-8 ">
          <h1 className=" text-base sm:text-xl xl:text-3xl  font-bold text-burgundy ">
            SHEDA MART
          </h1>
          <div className="md:flex items-center gap-2 hidden">
            <img src={secure} alt="" className="w-full" />
            <p className="font-medium text-greyTitle">SecurePayment</p>
          </div>
        </div>
        <div className=" w-full max-w-[276px]  space-y-8">
          <Stepper currentStep={currentStep} steps={steps} />

          {/* <div className="flex gap-2 justify-center">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
              onClick={() =>
                setCurrentStep((prev) => Math.min(steps.length, prev + 1))
              }
              disabled={currentStep === steps.length}
            >
              Next
            </button>
          </div> */}
        </div>
      </div>

      {currentStep === 1 && (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div
              className="border rounded-md bg-white p-4 "
              //   box-shadow: 0px 4px 4px 0px #00000040;

              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="flex items-center justify-between w-full text-greyTitle border-b">
                <div className="flex items-center gap-3">
                  <CustomCheckbox section="address" />
                  <h2 className="font-bold text-sm  lg:text-2xl mb-2">
                    1. Customer Address
                  </h2>
                </div>
                {/* <h3 className="text-sm">Change</h3> */}
              </div>
              <div className="space-y-2 py-2 text-greyBody">
                <p className="text-sm">Agbabiaka Ololade</p>
                <p className=" text-xs md:text-sm">
                  No 30, Oyo road, opposite UI post office, Oyo-Ibadan.
                  +2347037915621
                </p>
              </div>
            </div>

            <div
              className="border rounded-md bg-white p-4 "
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="flex items-center justify-between w-full text-greyTitle border-b">
                <div className="flex items-center gap-3">
                  <CustomCheckbox section="delivery" />
                  <h2 className="font-bold text-sm md:text-lg mb-2">
                    2. Delivery Details
                  </h2>
                </div>
                {/* <h3 className="text-sm">Change</h3> */}
              </div>
              <div className="py-2 space-y-2 text-greyBody">
                <p className="text-sm">Pick-up Station</p>
                <p className=" text-xs md:text-sm">
                  Delivery between 20 August and 25 August
                </p>
              </div>
            </div>

            <div
              className="border rounded-md bg-white p-4 "
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="flex items-center justify-between w-full text-greyTitle border-b">
                <div className="flex items-center gap-3">
                  <CustomCheckbox section="payOnDelivery" />
                  <h2 className="font-bold text-sm md:text-lg mb-2 text-greycaption">
                    3. Payment method
                  </h2>
                </div>
              </div>
              {/*  */}
              <div className="space-y-4 py-2">
                <h1 className=" text-greyBody">Payment on Delivery</h1>
                <div className=" flex items-center gap-2">
                  <CustomCheckbox section="payOnDelivery" isPink />
                  <div>
                    <h1 className=" text-greyTitle">
                      Pay with your card or bank transfer on delivery
                    </h1>{" "}
                    <p className=" text-xs text-greySubtitle">
                      (You can pay with your card or bank transfer via
                      ReniTrust, simply inform our delivery agent when your
                      order is being delivered)
                    </p>
                  </div>
                </div>
                <p className=" font-medium text-greyBody">Pre-pay now</p>
                <div className=" flex items-center gap-2">
                  <CustomCheckbox section="prePayNow" isPink />
                  <div>
                    <h2 className=" text-greyTitle">
                      Pay now with card, bank transfer, or USSD
                    </h2>
                    <p className=" text-greySubtitle text-xs">
                      You will be redirected to our secure checkout page
                    </p>
                  </div>
                </div>
                {checkedSections.prePayNow && (
                  <div className="border border-[#C7CCD0] p-5">
                    <div className=" bg-[#E2E4E7] p-4 flex items-center gap-2 w-fit  border-b">
                      <img src={wallet} alt="" />
                      <h1 className=" text-[#3A3F43] font-bold">
                        Reni Trust credit balance: 0
                      </h1>
                    </div>
                    {/*  */}
                    <div className=" mt-4 py-3 space-y-3  border-b">
                      <p className=" text-greyTitle">
                        Kindly note that you will be directed to ReniTrust
                        platform to complete your purchase.
                      </p>
                      <h1 className=" text-[#141A1F] text-3xl font-bold">
                        ...
                      </h1>
                      <h2 className=" text-[#570016] font-medium">Details</h2>
                    </div>
                    {/*  */}
                    <div className=" flex items-center justify-between w-full mt-3">
                      <div className=" text-[#141A1F] font-semibold">
                        Powered by Reni Trust
                      </div>
                      <div className=" flex items-center gap-2">
                        <h2 className=" text-base text-[#141A1F] font-semibold">
                          We accept:
                        </h2>
                        <img src={visa} alt="" />
                        <img src={mastercard} alt="" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-surfaceLighter text-white font-bold rounded py-2 px-4 text-xs"
                  onClick={() =>
                    setCurrentStep((prev) => Math.min(steps.length, prev + 1))
                  }
                  disabled={currentStep === steps.length}
                >
                  CONFIRM ORDER
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className="border rounded-md bg-white p-4  h-fit"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <h2 className="font-bold text-lg mb-4 border-b">Cart Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Item's Total</span>
                <span>₦{subtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee</span>
                <span>₦{deliveryFee}</span>
              </div>
              <div className="flex justify-between font-bold text-lg my-4">
                <span>Total</span>
                <span>₦{total}</span>
              </div>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Enter code here"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="border p-2 rounded-md flex-1"
                />
                <button onClick={applyPromoCode}>APPLY</button>
              </div>
              <button className="bg-[#ABA9AA] text-white w-full py-3 rounded-md font-bold">
                Checkout
              </button>
              <p className=" text-greycaption text-xs text-center mt-1">
                Complete the steps in order to proceed
              </p>
            </div>
            <p className=" text-center text-greycaption text-xs">
              By proceeding, you are automatically accepting the <br />{" "}
              <span className=" text-[#570016]">Terms and conditions</span>
            </p>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className=" space-y-6">
          <h1 className=" text-greyTitle text-2xl font-bold">Pre-pay now</h1>
          <div className=" flex items-center gap-2">
            <CustomCheckbox section="prePayNow" isPink />
            <div>
              <h2 className=" text-greyTitle">
                Pay now with card, bank transfer, or USSD
              </h2>
              <p className=" text-greySubtitle text-xs">
                You will be redirected to our secure checkout page
              </p>
            </div>
          </div>
          {checkedSections.prePayNow && (
            <div className="border border-[#C7CCD0] p-5 flex items-center justify-between">
              <div>
                <div className=" bg-[#D2B28980] p-4 flex items-center gap-2 w-fit  border-b">
                  <img src={wallet} alt="" />
                  <h1 className=" text-[#3A3F43] font-bold">
                    Reni Trust credit balance: 0
                  </h1>
                </div>
                {/*  */}
                <div className=" mt-4 py-3 space-y-3  border-b">
                  <p className=" text-greyTitle">
                    Kindly note that you will be directed to ReniTrust platform
                    to complete your purchase.
                  </p>
                  <h1 className=" text-[#141A1F] text-3xl font-bold">...</h1>
                  <h2 className=" text-[#570016] font-medium">Details</h2>
                </div>
              </div>
              {/*  */}
              <div className=" basis-1/2 flex items-center justify-between w-full ">
                <div className=" flex items-center gap-2">
                  <h2 className=" text-base text-[#141A1F] font-semibold">
                    We accept:
                  </h2>
                  <img src={visa} alt="" />
                  <img src={mastercard} alt="" />
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-end">
            <button
              className="bg-surfaceLighter text-white font-bold rounded py-2 px-4 text-xs"
              onClick={() =>
                setCurrentStep((prev) => Math.min(steps.length, prev + 1))
              }
              disabled={currentStep === steps.length}
            >
              CONFIRM PAYMENT
            </button>
          </div>
        </div>
      )}

      {/*  */}
      <Link to="/cart">
        <div className=" flex items-center mt-4 text-sm  cursor-pointer text-[#141A1F]">
          <span>
            <img src={arrow} alt="" />
          </span>
          Go back & Continue shopping
        </div>
      </Link>
    </div>
  );
};

export default Checkout;
