import { X } from "lucide-react";
import icon from "../../../assets/congratulation.png";
import { useState } from "react";

const PerformanceNotification = () => {
  const [showNotificaton, setSetshowNotificaton] = useState(true);
  return (
    <>
      {showNotificaton ? (
        <div className=" flex items-center justify-between w-full">
          {/*  */}
          <div className=" flex items-center justify-between">
            <div className=" min-w-12 min-h-12 rounded">
              <img src={icon} alt="" className=" w-full h-full object-cover" />
            </div>
            <div className=" px-4 text-greycaption text-sm md:text-base">
              <h1 className=" text-sm md:text-base text-greySubtitle">
                Congratulation {""}
                <span className=" text-greyTitle font-medium md:text-lg">
                  Tolu!
                </span>
              </h1>
              <h3 className=" md:text-lg">
                You have done{" "}
                <span className=" text-[#52AC52] text-base md:text-lg">
                  {" "}
                  65%
                </span>{" "}
                more sales today. Here is an overview of your records.
              </h3>
            </div>
          </div>
          <X
            className=" min-w-4 min-h-4  size-6 cursor-pointer"
            onClick={() => setSetshowNotificaton(false)}
          />
        </div>
      ) : null}
    </>
  );
};

export default PerformanceNotification;
