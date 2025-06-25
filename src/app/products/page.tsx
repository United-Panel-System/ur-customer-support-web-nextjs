import { getProductCategory, getProducts } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProductListSection from "@/components/Products/ProductListSection";
import { BASE_URL } from "@/lib/seo/config";
import { getPaginatedProductSchema } from "@/lib/seo/schema";
import { Metadata } from "next";
import slugify from "slugify";

export const metadata: Metadata = {
  title: "Product List",
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

  const schema = getPaginatedProductSchema(products.data, currentPage);
  const canonicalUrl = `${BASE_URL}/products${currentPage > 1 ? `?page=${currentPage}` : ""}`;
  const prevUrl =
    currentPage > 1 ? `${BASE_URL}/products?page=${currentPage - 1}` : null;
  const nextUrl =
    currentPage < products.totalCount
      ? `${BASE_URL}/products?page=${currentPage + 1}`
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
        }}
      />
      <link rel="canonical" href={canonicalUrl} />
      {prevUrl && <link rel="prev" href={prevUrl} />}
      {nextUrl && <link rel="next" href={nextUrl} />}
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
