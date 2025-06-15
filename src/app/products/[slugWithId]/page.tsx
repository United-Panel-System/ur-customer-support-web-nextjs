import { getProductById, getProductCategory } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProductDetails from "@/components/Products/ProductDetails";

import type { Metadata, ResolvingMetadata } from "next";
import slugify from "slugify";

type Props = {
  params: Promise<{ slugWithId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
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
    title: `${product.data.name} | United Panel-System (M) Sdn. Bhd.`,
    description: product.data.description,
    openGraph: {
      images: [product.data.imageUrls[0], ...previousImages],
    },
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slugWithId } = await params;
  const id = slugWithId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    return <div>Invalid Product ID</div>;
  }

  const product = await getProductById(Number(id));
  const categories = await getProductCategory();

  const category = categories.data.find(
    (c) => c.id === product.data.productCategoryId,
  );

  const categoryName = slugify(category?.name || "", { lower: true });

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
}
