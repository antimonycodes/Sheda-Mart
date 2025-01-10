import qrImage from "../../assets/download 4.png";

const PromoBanner = () => {
  return (
    <div className=" px-4">
      <div className="  h-full  bg-gradient-to-r from-[#800020] to-[#800020]  px-4  w-full ">
        <div className=" relative h-fi lg:px-32 py-8 flex items-center w-full justify-between">
          <div className="">
            <h2 className=" text-xs mobile:text-base lg:text-3xl font-bold text-white mb-2">
              The easiest way to shop <br />
              and save
            </h2>
            <p className="text-white/90  text-[10px] md:text-base">
              Download the RemiTrust app. Fund & shop from Sheda Mart easily
            </p>
          </div>

          {/* QR Code Container */}
          <div className=" ">
            <img src={qrImage} alt="" className=" w-full h-full" />
          </div>
          {/* <div className="absolute right-28 top-0 w-96 h-96 rounded-full bg-red-700 opacity-20 translate-x-1/2 -translate-y-1/2"></div> */}
        </div>
        {/* Decorative circle */}
      </div>
    </div>
  );
};

export default PromoBanner;
