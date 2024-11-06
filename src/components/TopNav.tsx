import chatIcon from "../assets/chaticon.svg";
import locationIcon from "../assets/buildingicon.svg";
import mapIcon from "../assets/mapicon.svg";
const TopNav = () => {
  return (
    <div className=" bg-[#E4C3BD] py-2 px-[23px] text-grey md:hidden">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src={chatIcon}
            alt=""
            className=" w-[18px] h-[18px] text-[#292D32]"
          />
          <a href="">08072796204</a>
        </div>
        {/*  */}
        <div className="flex gap-2 items-center">
          <img src={locationIcon} alt="" />
          <a href="">Nigeria</a>
        </div>
        {/*  */}
        <div className="flex gap-2 items-center">
          <img src={mapIcon} alt="" />
          <a href="">Store</a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
