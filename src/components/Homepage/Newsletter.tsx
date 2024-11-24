import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="bg-[#D2D1D133] py-6  w-full flex justify-center items-center">
      <div className=" max-w-[753px]">
        <p className="mb-4 text-grey700 font-medium tracking-[-1%]">
          Not a fan of junk mail? Neither are we. We promise to send you only
          the good stuff including a free coupon on your next purchase.
        </p>
        <div className="flex justify-center w-full">
          <input
            type="email"
            placeholder="Email address"
            className="border border-grey200 text-sm text-grey600 font-medium rounded-l-lg p-2 w-full"
          />
          <button className="bg-surfaceLighter  text-white rounded-r-md px-12">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
