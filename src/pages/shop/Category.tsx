// import earrings from "../../assets/earrings.png";
import rings from "../../assets/rings.png";
import bracelet from "../../assets/bracelet.png";
import necklace from "../../assets/necklace.png";
import bodyJewelry from "../../assets/bodyJewelery.png";
import watches from "../../assets/watches.png";
import rightArrow from "../../assets/arrowright.svg";
import { Link } from "react-router-dom";

interface CategoryItem {
  title: string;
  imageUrl: string;
}

const Category = () => {
  const categories: CategoryItem[] = [
    { title: "Watches", imageUrl: watches },
    { title: "Rings", imageUrl: rings },
    { title: "Bracelets", imageUrl: bracelet },
    { title: "Necklaces", imageUrl: necklace },
    { title: "Jewelery", imageUrl: bodyJewelry },
    { title: "Watches", imageUrl: watches },
    { title: "Waatches", imageUrl: watches },
    { title: "Rings", imageUrl: rings },
    { title: "Bracelets", imageUrl: bracelet },
    { title: "Necklaces", imageUrl: necklace },
    { title: "Jewellery", imageUrl: bodyJewelry },

    { title: "Our Services", imageUrl: watches },
  ];
  return (
    <div className=" px-4 md:px-24 py-4">
      <div className=" flex items-center gap-[2px] md:gap-2 text-greyTitle text-sm mb-6">
        <h1>Sheda Mart</h1>
        <img src={rightArrow} alt="" />
        <Link to="/categories">
          <h1>Shop</h1>
        </Link>
        <img src={rightArrow} alt="" />
        <h1>Jewellery</h1>
      </div>

      {/* Grid layout */}
      <div className="grid gap-4">
        {/* First Row */}
        <div className="grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
          {categories.map((category, index) => (
            <Link to="/details">
              <div
                key={index}
                className="flex flex-col items-center border  shadow-md"
              >
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className=" w-full object-cover  mb-2"
                />
                <h3 className="text-md font-medium text-gray-800">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
