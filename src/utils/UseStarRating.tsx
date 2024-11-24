import { Star } from "lucide-react";

const UseStarRating = ({
  rating,
  size = "md",
}: {
  rating?: any;
  size?: "sm" | "md";
}) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star: any) => (
        <Star
          key={star}
          className={`${
            star <= rating ? "text-[#F68B1E] fill-[#F68B1E]" : "text-[#777475]"
          } ${size === "sm" ? "w-4 h-4" : "w-5 h-5"}`}
        />
      ))}
    </div>
  );
};

export default UseStarRating;
