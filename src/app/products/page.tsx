import { getProductCategory, getProducts } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProductListSection from "@/components/Products/ProductListSection";
import { Metadata } from "next";
import slugify from "slugify";

export const metadata: Metadata = {
  title: "Product List",
  description: "All products provided by UR",
};

const ProductListPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;
  const categoryQuery = params.category || "";
  const searchQuery = params.search || "";
  const sortByOption = Number(params.sortBy) || 1;

  const categories = await getProductCategory();

  const category = categories.data.find(
    (c) => slugify(c.name, { lower: true }) === categoryQuery.toLowerCase(),
  );
  const categoryId = category?.id;

  const products = await getProducts({
    pageNumber: currentPage,
    pageSize: 10,
    productCategoryId: categoryId,
    name: searchQuery,
    sortBy: sortByOption,
    isActive: true,
  });

  return (
    <>
      <BreadcrumbWithBgImg
        pageName="Products"
        description="List of products."
        image="/images/banner/productBanner.jpg"
      />
      <ProductListSection
        products={products.data}
        currentPage={currentPage}
        pageSize={products.pageSize}
        totalCount={products.totalCount}
        categories={categories.data}
        searchQuery={searchQuery}
        filterCategory={categoryQuery}
      />
    </>
  );
};

export default ProductListPage;
