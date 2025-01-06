import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/user-1.png";
import img2 from "../../assets/user-2.png";
import img3 from "../../assets/user-3.png";
// import img4 from "../assets/user-4.png";

const FeaturedUsers = () => {
  const images: string[] = [img1, img2, img3, img2];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Tag @Shedamart to share your Sheda style
      </h1>
      <Slider {...settings} className=" flex gap-4">
        {images.map((img) => (
          <div>
            <img src={img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow Component
const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-[999] -right-4 top-[50%] transform -translate-y-[50%] bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </div>
  );
};

// Custom Previous Arrow Component
const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-[999] -left-4 top-[50%] transform -translate-y-[50%] bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </div>
  );
};

export default FeaturedUsers;
