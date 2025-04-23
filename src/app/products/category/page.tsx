import { getProductCategory } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProductCategorySection from "@/components/Products/ProductCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Category",
  description: "This is product category provided by UR",
};

const ProductCategoryPage = async () => {
  const categories = await getProductCategory();

  return (
    <>
      <BreadcrumbWithBgImg
        pageName="Product Category"
        description="List of product category."
        image="/images/banner/productBanner.jpg"
      />
      <ProductCategorySection productCategories={categories.data} />
    </>
  );
};

export default ProductCategoryPage;
