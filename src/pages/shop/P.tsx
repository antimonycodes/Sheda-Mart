import rightArrow from "../../assets/arrowright.svg";
import { useState } from "react";
// import { Star, ShoppingCart } from "lucide-react";
import img1 from "../../assets/retro-sunglass-1.png";
import img2 from "../../assets/retro-sunglass-2.png";
import img3 from "../../assets/retro-sunglass-3.png";
import img4 from "../../assets/retro-sunglass-4.png";
import UseStarRating from "@/utils/UseStarRating";
// import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
// import NewArrival from "@/components/Homepage/NewArrival";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
// import { UseStarRating } from "@/utils/UseStarRating";

interface Product {
  name: string;
  price: number;
  rating: number;
  totalRatings: number;
  origin: string;
  description: string;
  images: string[];
  reviews: Review[];
  ratingDistribution: RatingDistribution[];
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  date: string;
  author: string;
  isVerified: boolean;
}
interface RatingDistribution {
  rating: number;
  count: number;
  percentage: number;
}

const P = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const product: Product = {
    name: "Closeup Retro Sunglasses For Women",
    price: 5500,
    rating: 4.5,
    totalRatings: 10,
    origin: "Imported from China",
    description:
      "All sunglasses are hand-made and shipped carefully to ensure no damage during transit. Heavy Shipping",
    images: [img1, img2, img3, img4],
    reviews: [
      {
        id: "1",
        rating: 5,
        comment: "I love my glasses",
        date: "15/07/2024",
        author: "Sarah",
        isVerified: true,
      },
      {
        id: "2",
        rating: 5,
        comment: "Perfect for the summer",
        date: "14/07/2024",
        author: "Mike",
        isVerified: true,
      },
    ],
    ratingDistribution: [
      { rating: 5, count: 20, percentage: 80 },
      { rating: 4, count: 8, percentage: 32 },
      { rating: 3, count: 3, percentage: 12 },
      { rating: 2, count: 1, percentage: 4 },
      { rating: 1, count: 0, percentage: 0 },
    ],
  };

  return (
    <div className="py-4 px-4 lg:px-20 space-y-4">
      {/* Bedcrumbs */}
      <div className=" flex items-center gap-1 text-greyTitle text-xs">
        <h1>Sheda Mart</h1>
        <img src={rightArrow} alt="" />
        <h1>Accessories</h1>
        <img src={rightArrow} alt="" />
        <h1>Glasses</h1>
      </div>
      {/* Product Preview */}
      <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-24">
        {/* Product Image Gallery */}
        <div className="w-full  flex flex-col-reverse lg:flex-row gap-4">
          {/* Thumbnail Images */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`w-20 h-20 lg:w-28 lg:h-28 cursor-pointer ${
                  selectedImage === index ? "border-2 border-[#800020]" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full h-[300px] md:h-[500px]  bg-yellow-300">
            <img
              src={product.images[selectedImage]}
              alt=""
              className="w-full h-full object-cover rounded-md transition-all duration-500"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="w-full lg:w-1/2 border border-[#D1A3AF] p-4 md:p-6 rounded-md">
          <h1 className="text-base md:text-2xl text-greyBody border-b border-[#DBB8C166] pb-2">
            {product.name}
          </h1>
          <div className="space-y-4 py-2">
            <h1 className="text-greyTitle font-bold text-base lg:text-2xl md:text-3xl">
              ₦{product.price}
            </h1>

            <div className="flex items-center gap-4">
              <UseStarRating rating={product.rating} size="md" />
              <span className="text-greycaption text-sm">
                {product.totalRatings} Ratings
              </span>
            </div>

            <p className="text-greyDark text-sm">Low in stock</p>
            <p className="text-greyDark text-sm">Color: Burgundy</p>

            <h1 className="text-greyBody font-bold">Product Details</h1>
            <p className="text-greySubtitle text-sm">{product.description}</p>

            <h1 className="text-greyBody font-bold">
              Shipping and Return Policies
            </h1>

            <button className="w-full bg-burgundy py-2 rounded-md text-cream50 font-medium text-sm">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      {/* RElated Products */}
      {/* <NewArrival /> */}
      <div className=" py-24">
        <h1 className=" text-greyTitle bold text-xl mb-1 font-semibold">
          Products related to this item
        </h1>
        <FeaturedProducts />
      </div>{" "}
      {/* Feedback Table */}
      <table className=" w-full max-w-[996px] mx-auto">
        <tr className=" flex justify-between items-center border border-[#D1A3AF] px-1 md:px-5 py-[10px] ">
          <th className=" text-greyBody font-bold text-base md:text-2xl">
            Verified Customer Feedback
          </th>
          <th className=" text-[#570016] font-medium text-[8px] md:text-sm border-b md:border-b-[3px] border-[#570016]">
            SEE ALL
          </th>
        </tr>
        <tbody>
          <tr className=" flex flex-col md:flex-row w-full border border-[#D1A3AF] px-1 md:px-5 ">
            {/* Rating distr */}
            <td className=" basis-[30%] md:border-r border-[#D1A3AF] py-2 space-y-4 flex  flex-col md:items-start items-center">
              <h3 className=" text-greyBody font-medium">
                VERIFIED RATINGS (10)
              </h3>
              {/*  */}
              <div className=" w-fit p-4 bg-[#E6E6E6] flex flex-col items-center gap-2">
                <h1 className=" text-orange500 text-2xl font-bold">
                  4<span className=" font-normal text-xl">/5</span>
                </h1>
                {/*  */}
                <UseStarRating rating={product.rating} size="md" />
                <p className=" text-greycaption textsm">10 verified ratings</p>
              </div>
              {/*  */}
              <div className=" w-full">
                {product.ratingDistribution.map((dist) => (
                  <div
                    key={dist.rating}
                    className="flex items-center gap- w-full"
                  >
                    <span className="w-8 text-sm">{dist.rating} ★</span>
                    <span className="w-8 text-sm ">{dist.count}</span>
                    <div className="flex-1 h-[10px] bg-[#C5C4C4] rounded-[6.58px]">
                      <div
                        className="h-full bg-orange500 rounded"
                        style={{ width: `${dist.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </td>
            <hr />
            {/* Reviews */}
            <td className=" flex-1 md:pl-[15%] py-2 space-y-4">
              <h1 className=" font-medium text-greySubtitle ">
                Comments from verified purchases
              </h1>
              {/*  */}
              <div>
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <UseStarRating rating={review.rating} size="sm" />
                    <p className="mt-2 font-medium">{review.comment}</p>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                      <span>{review.date}</span>
                      {review.isVerified && (
                        <span className="text-green-600 flex items-center gap-1">
                          <span className="text-green-600">✓</span> Verified
                          Purchase
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/*  */}
    </div>
  );
};

export default P;
