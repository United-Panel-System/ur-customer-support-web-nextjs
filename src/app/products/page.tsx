import { getProductCategory, getProducts } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProductListSection from "@/components/Products/ProductListSection";
import { Metadata } from "next";
import slugify from "slugify";

export const metadata: Metadata = {
  title: "Product List | United Panel-System (M) Sdn. Bhd.",
  description:
    "Explore high-quality panel systems and construction solutions offered by United Panel System (M) Sdn. Bhd. Browse our full product range tailored for industrial and commercial applications.",
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
        description="Explore high-quality panel systems and construction solutions offered by United Panel System (M) Sdn. Bhd. Browse our full product range tailored for industrial and commercial applications."
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
