import heroVideo from "../assets/shedaMart.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-[600px]  overflow-hidden">
      {/* Video Background */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <div className=" absolute top-0 left-0 h-full bg-black bg-opacity-50 inset-0"></div>

      {/* Overlay (Optional) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-30 text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to SHEDA MART
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your one-stop shop for everything you need
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md">
          Shop Now
        </button>
      </div>

      {/* Fallback for Mobile (Optional Poster Image) */}
      {/* <img
        src="/path/to/fallback.jpg" // Replace with an actual image path if you want a fallback
        alt="Sheda Mart"
        className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
      /> */}
    </div>
  );
};

export default Hero;
