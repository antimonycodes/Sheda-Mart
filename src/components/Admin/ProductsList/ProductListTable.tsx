import { useState } from "react";
import { Search, Plus } from "lucide-react";
import img0ne from "../../../assets/NA1.png";
import imgTwo from "../../../assets/NA2.png";
import imgThree from "../../../assets/NA3.png";
import imgFour from "../../../assets/NA4.png";

interface Product {
  id: number;
  name: string;
  category: string;
  stock: string;
  price: string;
  quantity: number;
  status: "Published" | "Scheduled" | "Inactive";
  image: string;
  isStockEnabled: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Vintage Sunglasses",
    category: "Jewelry",
    stock: "07/22",
    price: "₦5,000.00",
    quantity: 340,
    status: "Published",
    image: img0ne,
    isStockEnabled: true,
  },
  {
    id: 2,
    name: "Leather Wristwatch",
    category: "Jewelry",
    stock: "07/22",
    price: "₦25,000.00",
    quantity: 340,
    status: "Scheduled",
    image: img0ne,
    isStockEnabled: true,
  },
  {
    id: 3,
    name: "Anklet",
    category: "Jewelry",
    stock: "07/22",
    price: "₦2,500.00",
    quantity: 340,
    status: "Inactive",
    image: img0ne,
    isStockEnabled: false,
  },
  {
    id: 4,
    name: "Scented Candle",
    category: "Home & Office",
    stock: "07/22",
    price: "₦1,000.00",
    quantity: 340,
    status: "Published",
    image: img0ne,
    isStockEnabled: true,
  },
  {
    id: 5,
    name: "Elegant gold necklace",
    category: "Jewelry",
    stock: "07/22",
    price: "₦4,500.00",
    quantity: 340,
    status: "Published",
    image: img0ne,
    isStockEnabled: true,
  },
];

const Toggle = ({
  isEnabled,
  onToggle,
}: {
  isEnabled: boolean;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
      isEnabled ? "bg-[#988259]" : "bg-gray-200"
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
        isEnabled ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

// const DashboardMetric = ({
//   title,
//   value,
//   growth,
// }: {
//   title: string;
//   value: string;
//   growth: string;
// }) => (
//   <div className="bg-white p-4 rounded-lg shadow">
//     <div className="flex items-center justify-between">
//       <div>
//         <h3 className="text-sm text-gray-500">{title}</h3>
//         <p className="text-xl font-semibold mt-1">{value}</p>
//       </div>
//       <span className="text-green-500 text-sm">+{growth}</span>
//     </div>
//   </div>
// );

const StatusBadge = ({ status }: { status: Product["status"] }) => {
  const colors = {
    Published: "bg-green-100 text-green-800",
    Scheduled: "bg-yellow-100 text-yellow-800",
    Inactive: "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${colors[status]}`}>
      {status}
    </span>
  );
};

const ProductListTable = () => {
  const [productList, setProductList] = useState(products);

  const handleToggle = (productId: number) => {
    setProductList(
      products.map((product) =>
        product.id === productId
          ? { ...product, isStockEnabled: !product.isStockEnabled }
          : product
      )
    );
  };

  return (
    <div className="  custom-shadow">
      {/* Filters and Search */}
      <div className=" p-2.5 ">
        <h1>Filters</h1>
        <div className=" flex flex-wrap gap-4 mb-6 text-greySubtitle">
          <select className="p-2 border rounded-md bg-white text-sm font-medium">
            <option>Status</option>
          </select>
          <select className="p-2 border rounded-md bg-white">
            <option>Category</option>
          </select>
          <select className="p-2 border rounded-md bg-white">
            <option>Stock</option>
          </select>
          <div className="flex-grow" />
          {/* search */}
          <div className="flex flex-wrap gap-2">
            <div className=" border-[0.5px] border-greyDisabled rounded py-3 px-6 ">
              <Search size={20} className="  text-greyDisabled" />
            </div>
            {/* buttons */}
            <div className=" flex gap-4">
              <button className="px-4 py-2  rounded-md border border-[#800020] text-[#800020] flex items-center gap-2">
                Export
              </button>
              <button className="px-4 py- text-sm bg-surfaceLighter text-white rounded-md flex items-center gap-2">
                <Plus size={16} />
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#E4E7EC]">
            <tr>
              <th className="px-6 py-3 text-left text-xs text-[#344054] tracking-wider  whitespace-nowrap">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#344054] tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#344054] tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#344054] tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#344054] tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#344054] tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#344054] tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {productList.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-sm font-medium">{product.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{product.category}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Toggle
                      isEnabled={product.isStockEnabled}
                      onToggle={() => handleToggle(product.id)}
                    />
                    {product.stock}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{product.price}</td>
                <td className="px-4 py-3 text-sm">{product.quantity}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={product.status} />
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-center p-4 border-t">
          <div className="flex gap-1">
            <button className="px-3 py-1 border rounded-md">&lt;</button>
            <button className="px-3 py-1 border rounded-md bg-purple-600 text-white">
              1
            </button>
            <button className="px-3 py-1 border rounded-md">2</button>
            <button className="px-3 py-1 border rounded-md">3</button>
            <button className="px-3 py-1 border rounded-md">4</button>
            <button className="px-3 py-1 border rounded-md">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListTable;
