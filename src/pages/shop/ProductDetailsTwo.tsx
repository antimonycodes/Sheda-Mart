import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import img1 from "../../assets/retro-sunglass-1.png";
import img2 from "../../assets/retro-sunglass-2.png";
import img3 from "../../assets/retro-sunglass-3.png";
import img4 from "../../assets/retro-sunglass-4.png";

// Types
interface Product {
  name: string;
  price: number;
  rating: number;
  totalRatings: number;
  origin: string;
  description: string;
  images: string[];
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

// Components
const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`w-16 h-16 border-2 rounded ${
              selectedImage === idx ? "border-red-900" : "border-gray-200"
            }`}
          >
            <img
              src={img}
              alt={`Product view ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-orange-50 rounded-lg p-8">
        <img
          src={images[selectedImage]}
          alt="Product main view"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

const StarRating = ({
  rating,
  size = "md",
}: {
  rating: number;
  size?: "sm" | "md";
}) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          } ${size === "sm" ? "w-4 h-4" : "w-5 h-5"}`}
        />
      ))}
    </div>
  );
};

const RelatedProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Products related to this item
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {products.map((product, idx) => (
          <div key={idx} className="space-y-2">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-sm">{product.name}</h3>
            <p className="font-semibold">₦{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const RatingChart = ({
  distributions,
}: {
  distributions: RatingDistribution[];
}) => {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-sm">VERIFIED RATINGS (15)</h3>
      {distributions.map((dist) => (
        <div key={dist.rating} className="flex items-center gap-2">
          <span className="w-8 text-sm">{dist.rating} ★</span>
          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-yellow-400 rounded"
              style={{ width: `${dist.percentage}%` }}
            />
          </div>
          <span className="w-8 text-sm text-right">{dist.count}</span>
        </div>
      ))}
    </div>
  );
};

const ReviewsList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4">
          <StarRating rating={review.rating} size="sm" />
          <p className="mt-2 font-medium">{review.comment}</p>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
            <span>{review.date}</span>
            {review.isVerified && (
              <span className="text-green-600 flex items-center gap-1">
                <span className="text-green-600">✓</span> Verified Purchase
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductDetailsTwo = () => {
  const product: Product = {
    name: "Closeup Retro Sunglasses For Women",
    price: 5500,
    rating: 4.5,
    totalRatings: 32,
    origin: "Imported from China",
    description:
      "All sunglasses are hand-made and shipped carefully to ensure no damage during transit. Heavy Shipping",
    images: [img1, img2, img3, img4],
  };

  const relatedProducts: Product[] = Array(6).fill({
    ...product,
    price: 5000,
    images: ["/api/placeholder/200/200"],
  });

  const reviews: Review[] = [
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
  ];

  const ratingDistribution: RatingDistribution[] = [
    { rating: 5, count: 20, percentage: 80 },
    { rating: 4, count: 8, percentage: 32 },
    { rating: 3, count: 3, percentage: 12 },
    { rating: 2, count: 1, percentage: 4 },
    { rating: 1, count: 0, percentage: 0 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Left column - Image Gallery */}
        <ImageGallery images={product.images} />

        {/* Right column - Product Info */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-gray-600">
              ({product.totalRatings} ratings)
            </span>
          </div>

          <div className="text-xl font-bold">
            ₦{product.price.toLocaleString()}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Product Details</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Origin:</span> {product.origin}
              </p>
              <p>{product.description}</p>
            </div>
          </div>

          <button className="w-full bg-red-900 text-white py-3 rounded-md flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Verified Customer Feedback</h2>
          <a href="#" className="text-red-900 font-medium">
            SEE ALL
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <RatingChart distributions={ratingDistribution} />
          <ReviewsList reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTwo;
