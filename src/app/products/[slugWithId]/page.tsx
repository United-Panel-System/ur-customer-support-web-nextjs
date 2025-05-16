import { getProducts, getProductById, getProductCategory } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProductDetails from "@/components/Products/ProductDetails";

import type { Metadata, ResolvingMetadata } from "next";
import slugify from "slugify";

type Props = {
  params: { slugWithId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slugWithId } = await params;
  const id = slugWithId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    return {
      title: "Invalid Product ID",
    };
  }

  const product = await getProductById(Number(id));

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.data.name,
    description: product.data.description,
    openGraph: {
      images: [product.data.imageUrls[0], ...previousImages],
    },
  };
}

const ProductDetailsPage = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slugWithId?: string };
}>) => {
  const { slugWithId } = await params;

  // Extract the numeric ID at the end
  const id = slugWithId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    return <div>Invalid Product ID</div>;
  }

  const product = await getProductById(Number(id));

  const categories = await getProductCategory();
  const category = categories.data.find(
    (c) => c.id === product.data.productCategoryId,
  );

  const categoryName = slugify(category.name, { lower: true });

  const allProduct = await getProducts(
    {
      pageSize: 4,
      pageNumber: 1,
      isActive: true,
    },
    { cache: "no-store" },
  );

  // Filter out the current detail products
  const moreProduct = allProduct.data
    .filter((product) => product.id !== Number(id))
    .slice(0, 3);

  return (
    <>
      <BreadcrumbWithBgImg
        pageName={product.data.name}
        description=""
        image="/images/banner/productBanner.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: `${product.data.name}` },
        ]}
      />
      <ProductDetails
        product={product.data}
        categories={categories.data}
        filterCategory={categoryName}
      />
    </>
  );
};

export default ProductDetailsPage;
