import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import img1 from "../../assets/NA1.png";
import img2 from "../../assets/NA2.png";
import img3 from "../../assets/NA3.png";
import img4 from "../../assets/NA4.png";
import { useState } from "react";
import Button from "@/Shared/Button";
import HeaderText from "@/Shared/HeaderText";

interface Products {
  id: number;
  name: string;
  price: number;
  img: string;
}

const NewArrival = () => {
  const [hoveredProduct, setHoveredProduct] = useState<null | Number>(null);

  const products: Products[] = [
    { id: 1, name: "Rounded Sunglasses", price: 5500, img: img1 },
    { id: 2, name: "Stylish Handbag", price: 8500, img: img2 },
    { id: 3, name: "Elegant Watch", price: 12000, img: img3 },
    { id: 4, name: "Trendy Sneakers", price: 7500, img: img4 },
    { id: 5, name: "Classic Backpack", price: 6000, img: img2 },
    { id: 6, name: "Chic Scarf", price: 3000, img: img4 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
    <div className=" mx-auto">
      <HeaderText text="New Arrivals"></HeaderText>

      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="px-2 pb-4"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative pb-4 flex flex-col border bg-white rounded-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-md">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {/* Heart icon - only visible on hover */}
              {hoveredProduct === product.id && (
                <button className="absolute top-2 right-2 p-1 rounded-full bg-white  transition-opacity duration-200">
                  <Heart className="w-5 h-5 text-pink-500" />
                </button>
              )}

              <div className=" px-4">
                <div className="mt-4">
                  <h3 className="text-sm text-greycaption font-medium">
                    {product.name}
                  </h3>
                  <p className="text-greyBody font-medium">
                    ₦ {product.price.toLocaleString()}
                  </p>
                </div>

                {/* Add to Cart button - visible on hover */}
                {hoveredProduct === product.id && (
                  <div className="w-full">
                    <Button
                      text="Add to cart"
                      width="100%"
                      bgColor="#942944"
                    ></Button>
                  </div>
                )}
              </div>
            </div>
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

export default NewArrival;
