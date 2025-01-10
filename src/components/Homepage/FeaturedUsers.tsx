import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/user-1.png";
import img2 from "../../assets/user-2.png";
import img3 from "../../assets/user-3.png";
// import img4 from "../../assets/user-4.png";

const FeaturedUsers = () => {
  const images: string[] = [img1, img2, img3, img2, img1, img2, img3];
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
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 2,
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
    <div className=" px-4">
      <h1 className="lg:text-3xl font-bold text-center mb-2">
        Tag @Shedamart to share your Sheda style
      </h1>
      <Slider {...settings} className="   gap-4 rounded-xl">
        {images.map((img) => (
          <div className=" flex   px-4 b border-transparent2 rounded-xl">
            <img src={img} alt="" className="min-w-full h-full rounded-xl" />
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
      className="absolute z-[999] right-0 lg:-right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
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
      className="absolute z-[999] left-0 lg:-left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </div>
  );
};

export default FeaturedUsers;
