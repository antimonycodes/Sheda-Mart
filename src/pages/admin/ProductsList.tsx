import ProductListTable from "@/components/Admin/ProductsList/ProductListTable";
import QuickStats from "@/components/Admin/ProductsList/QuickStats";

const ProductsList = () => {
  return (
    <div className=" space-y-4">
      <div>
        <h1 className=" text-greyTitle font-medium text-2xl">
          List of Products
        </h1>
        <p className=" text-sm text-greySubtitle">
          This contains the total number of products and their prices.
        </p>
      </div>
      <QuickStats />
      <ProductListTable />
    </div>
  );
};

export default ProductsList;
