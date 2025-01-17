import React, { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  AlignLeft,
  Link2,
  Plus,
  ArrowRight,
  ImageIcon,
} from "lucide-react";

interface ProductFormData {
  name: string;
  sku: string;
  description: string;
  basePrice: string;
  discountedPrice: string;
  chargeTax: boolean;
  inStock: boolean;
  category: string;
  status: string;
  collection: string;
}

const ProductForm = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    sku: "",
    description: "",
    basePrice: "",
    discountedPrice: "",
    chargeTax: false,
    inStock: true,
    category: "",
    status: "",
    collection: "",
  });

  const [selectedTab, setSelectedTab] = useState("inventory");

  const EditorButton = ({ icon: Icon }: { icon: React.ElementType }) => (
    <button className="p-2 hover:bg-gray-100 rounded">
      <Icon size={16} />
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-2">Add a new product</h1>
      <p className="text-gray-500 mb-8">Orders placed across your store</p>

      <div className="flex gap-6">
        {/* Left Column */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Product information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Product Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm mb-1">SKU</label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2"
                    value={formData.sku}
                    onChange={(e) =>
                      setFormData({ ...formData, sku: e.target.value })
                    }
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">Barcode</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Description (optional)
                </label>
                <div className="border rounded-md">
                  <div className="border-b p-2 flex gap-1">
                    <EditorButton icon={Bold} />
                    <EditorButton icon={Italic} />
                    <EditorButton icon={Underline} />
                    <div className="w-px bg-gray-300 mx-1" />
                    <EditorButton icon={List} />
                    <EditorButton icon={AlignLeft} />
                    <EditorButton icon={ImageIcon} />
                    <EditorButton icon={Link2} />
                  </div>
                  <textarea
                    className="w-full p-2 min-h-[150px] outline-none"
                    placeholder="Type here..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Product Variants</h2>
            <div className="flex gap-4 mb-4">
              <select className="border rounded-md p-2 flex-1">
                <option>Select Variant</option>
              </select>
              <input
                type="text"
                placeholder="Variant Value"
                className="border rounded-md p-2 flex-1"
              />
              <button className="text-rose-600">
                <Plus size={20} />
              </button>
            </div>
            <button className="text-rose-600 text-sm font-medium">
              + Add Another Option
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-80">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Pricing</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Base Price</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={formData.basePrice}
                  onChange={(e) =>
                    setFormData({ ...formData, basePrice: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Discounted Price</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={formData.discountedPrice}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      discountedPrice: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="chargeTax"
                  checked={formData.chargeTax}
                  onChange={(e) =>
                    setFormData({ ...formData, chargeTax: e.target.checked })
                  }
                  className="mr-2"
                />
                <label htmlFor="chargeTax" className="text-sm">
                  Charge tax on this product
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Organize</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Category</label>
                <select
                  className="w-full border rounded-md p-2"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option>Select a category</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Status</label>
                <select
                  className="w-full border rounded-md p-2"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <option>Select status</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Collection</label>
                <select
                  className="w-full border rounded-md p-2"
                  value={formData.collection}
                  onChange={(e) =>
                    setFormData({ ...formData, collection: e.target.value })
                  }
                >
                  <option>Select Collection</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="bg-white rounded-lg shadow mt-6">
        <div className="border-b px-6">
          <div className="flex gap-6">
            {[
              "inventory",
              "shipping",
              "media gallery",
              "attributes",
              "advanced",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-4 px-2 border-b-2 text-sm capitalize ${
                  selectedTab === tab
                    ? "border-rose-600 text-rose-600"
                    : "border-transparent text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {selectedTab === "inventory" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Options</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
                  Continue <ArrowRight size={16} />
                </button>
              </div>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Product in stock now: 20</p>
                <p>Product in transit: 0</p>
                <p>Last time restocked: 15th Sept, 2024</p>
                <p>Total units ever: +1,000,000</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
