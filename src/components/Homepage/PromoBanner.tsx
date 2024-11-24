import qrImage from "../../assets/download 4.png";

const PromoBanner = () => {
  return (
    <div className=" my-12 h-full  bg-gradient-to-r from-[#800020] to-[#800020]  mx-24">
      <div className="container relative h-fit  px-32 py-8 flex items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-2">
            The easiest way to shop <br />
            and save
          </h2>
          <p className="text-white/90 ">
            Download the RemiTrust app. Fund & shop from Sheda Mart easily
          </p>
        </div>

        {/* QR Code Container */}
        <img src={qrImage} alt="" />
        {/* <div className="absolute right-28 top-0 w-96 h-96 rounded-full bg-red-700 opacity-20 translate-x-1/2 -translate-y-1/2"></div> */}
      </div>
      {/* Decorative circle */}
    </div>
  );
};

export default PromoBanner;
