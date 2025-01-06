import rightArrow from "../../assets/arrowright.svg";
import { useState } from "react";
// import { Star, ShoppingCart } from "lucide-react";
import img1 from "../../assets/retro-sunglass-1.png";
import img2 from "../../assets/retro-sunglass-2.png";
import img3 from "../../assets/retro-sunglass-3.png";
import img4 from "../../assets/retro-sunglass-4.png";
import UseStarRating from "@/utils/UseStarRating";
// import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import NewArrival from "@/components/Homepage/NewArrival";
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
    <div className="py-4 px-8 md:px-20 space-y-4">
      {/* Bedcrumbs */}
      <div className=" flex items-center gap-2 text-greyTitle text-sm">
        <h1>Sheda Mart</h1>
        <img src={rightArrow} alt="" />
        <h1>Accessories</h1>
        <img src={rightArrow} alt="" />
        <h1>Glasses</h1>
      </div>
      {/* Product Preview */}
      <div className=" flex flex-col md:flex-row justify-between gap-24">
        {/* Product-Image Gallery */}
        <div className=" basis-[50%]  flex flex-col-reverse md:flex-row gap-4">
          {/* mini-images */}
          <div className=" space-y-4 flex items-center">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={` w-28 h-28 ${
                  selectedImage === index && " border-[2px] border-[#800020] "
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img}
                  alt=""
                  className=" w-full h-full object-cover "
                />
              </div>
            ))}
          </div>
          {/* Main image */}
          <div className=" h-[500px] w-[486px] transition-all duration-500">
            <img
              src={product.images[selectedImage]}
              alt=""
              className=" w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
        {/* Product-info */}
        <div className=" basis-[50%] border border-[#D1A3AF] py-[10px] px-5">
          <h1 className=" text-2xl text-greyBody border-b border-[#DBB8C166] pb-2">
            {product.name}
          </h1>
          <div className=" space-y-4 py-2">
            {/* price */}
            <h1 className=" text-greyTitle font-bold text-3xl">
              ₦{product.price}
            </h1>
            {/* star rating */}
            <div className=" flex items-center gap-4">
              <UseStarRating rating={product.rating} size="md" />
              <span className=" text-greycaption text-sm">
                {product.totalRatings} Ratings
              </span>
            </div>
            {/*  */}
            <h2 className=" text-greyDark text-sm">Low in stock</h2>
            <h2 className=" text-greyDark text-sm">Colour</h2>
            <h1 className=" text-greyBody font-bold">Product Details</h1>
            <div className=" flex items-center gap-2">
              <h1 className=" text-greyBody font-medium">Origin:</h1>
              <span className=" text-greySubtitle">Imported from China</span>
            </div>
            {/*  */}
            <h1 className=" text-greyBody font-bold">About this item</h1>
            <p className=" text-greySubtitle text-sm ]">
              All sunglasses are brand new and shipped carefully to ensure no
              damage during transit. Happy Shopping!
            </p>
            {/*  */}
            <h1 className=" text-greyBody font-bold">
              Shipping and return policies
            </h1>
            {/*  */}
            <button className=" w-full bg-burgundy p-[10px] rounded text-cream50 font-medium text-sm">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      {/* RElated Products */}
      <NewArrival />
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
