import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import img1 from "../../assets/retro-sunglass-1.png";
import img2 from "../../assets/retro-sunglass-2.png";
import img3 from "../../assets/retro-sunglass-3.png";
import img4 from "../../assets/retro-sunglass-4.png";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  ratingCount: number;
  images: string[];
  origin: string;
  description: string;
}

interface Review {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: string;
  verified: boolean;
}

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data
  const product: Product = {
    id: 1,
    name: "Closeup Retro Sunglasses For Women",
    price: 5500,
    rating: 4.5,
    ratingCount: 32,
    images: [img1, img2, img3, img4],
    origin: "Imported from China",
    description:
      "All sunglasses are hand-made and shipped carefully to ensure no damage during transit. Heavy Shipping",
  };

  // Sample related products
  const relatedProducts: Product[] = Array(6).fill({
    id: 2,
    name: "Retro Cat Eye Sunglasses",
    price: 5000,
    rating: 4.5,
    ratingCount: 15,
    images: ["/api/placeholder/200/200"],
    origin: "",
    description: "",
  });

  // Sample reviews
  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      comment: "I love my glasses",
      author: "Sarah",
      date: "15/07/2024",
      verified: true,
    },
    {
      id: 2,
      rating: 5,
      comment: "Perfect for the summer",
      author: "Mike",
      date: "14/07/2024",
      verified: true,
    },
  ];

  // Rating distribution
  const ratingDistribution = [
    { stars: 5, count: 20 },
    { stars: 4, count: 8 },
    { stars: 3, count: 3 },
    { stars: 2, count: 1 },
    { stars: 1, count: 0 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-emerald-600">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="bg-orange-50 rounded-lg p-8">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-auto"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`p-2 border rounded ${
                  selectedImage === index ? "border-red-900" : "border-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">
              ({product.ratingCount} ratings)
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

          <button className="w-full bg-red-900 text-white py-3 rounded-md flex items-center justify-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">
          Products related to this item
        </h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {relatedProducts.map((product, index) => (
              <div key={index} className="flex-none w-48">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-2">
                  <h3 className="text-sm">{product.name}</h3>
                  <p className="font-bold">₦{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Verified Customer Feedback</h2>
          <a href="#" className="text-red-900 font-medium">
            SEE ALL
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rating Distribution */}
          <div>
            <h3 className="font-bold mb-4">VERIFIED RATINGS (15)</h3>
            <div className="space-y-2">
              {ratingDistribution.map(({ stars, count }) => (
                <div key={stars} className="flex items-center space-x-2">
                  <span className="w-8">{stars} ★</span>
                  <div className="flex-1 h-4 bg-gray-200 rounded">
                    <div
                      className="h-full bg-yellow-400 rounded"
                      style={{
                        width: `${(count / product.ratingCount) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="w-8 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="font-medium mt-2">{review.comment}</p>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                  <span>{review.date}</span>
                  {review.verified && (
                    <span className="flex items-center text-green-600">
                      ✓ Verified Purchase
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
