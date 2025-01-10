import jewelleryImg from "../../assets/shop-jewellery.png";
import accessoriesImg from "../../assets/shop-accessories.png";
import selfCareImg from "../../assets/shop-selfcare.png";
import artsImg from "../../assets/shop-arts.png";
import officeImg from "../../assets/shop-office.png";
import gadgetImg from "../../assets/shop-gadgets.png";
import childrenImg from "../../assets/shop-children.png";
import b2schlImg from "../../assets/shop-b2school.png";
import supermarketImg from "../../assets/shop-accessories.png";
import booksImg from "../../assets/shop-books.png";
import ourservicesImg from "../../assets/shop-ourservices.png";
import { Link } from "react-router-dom";

interface CategoryItem {
  title: string;
  imageUrl: string;
}

const CategoriesList = () => {
  const categories: CategoryItem[] = [
    { title: "Jewellery", imageUrl: jewelleryImg },
    { title: "Accessories", imageUrl: accessoriesImg },
    { title: "Beauty & Self Care", imageUrl: selfCareImg },
    { title: "Arts & Collectibles", imageUrl: artsImg },
    { title: "Home & Office", imageUrl: officeImg },
    { title: "Computing & Gadgets", imageUrl: gadgetImg },
    { title: "Children", imageUrl: childrenImg },
    { title: "Back to School", imageUrl: b2schlImg },
    { title: "Supermarket", imageUrl: supermarketImg },
    { title: "Books", imageUrl: booksImg },
    { title: "Our Services", imageUrl: ourservicesImg },
  ];

  return (
    <div className=" md:px-24 py-4">
      <h2 className="lg:text-3xl font-bold text-center mb-8">
        Sheda Mart / Shop
      </h2>

      {/* Grid layout */}
      <div className="grid gap-4">
        {/* First Row */}
        <div className="grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-4">
          {categories.slice(0, 6).map((category, index) => (
            <Link to="/categoryname">
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

        {/* Second Row */}
        <div className="grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 mx-4 md:mx-8 xl:mx-24">
          {categories.slice(6).map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center  border  shadow-md"
            >
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full object-cover  mb-2"
              />
              <h3 className="text-lg font-medium text-gray-800">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
