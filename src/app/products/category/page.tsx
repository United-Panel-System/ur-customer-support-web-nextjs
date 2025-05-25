import { getProductCategory } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProductCategorySection from "@/components/Products/ProductCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Categories",
  description:
    "Explore the range of product categories offered by United Panel System (M) Sdn. Bhd., including premium panel systems and construction solutions tailored for industrial and commercial needs.",
};

const ProductCategoryPage = async () => {
  const categories = await getProductCategory();

  return (
    <>
      <BreadcrumbWithBgImg
        pageName="Product Categories"
        description="Browse our wide range of panel system categories designed to meet the highest standards in industrial and commercial construction."
        image="/images/banner/productBanner.jpg"
      />
      <ProductCategorySection productCategories={categories.data} />
    </>
  );
};

export default ProductCategoryPage;
