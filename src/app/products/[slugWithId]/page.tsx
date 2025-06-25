import { getProductById, getProductCategory } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ProductDetails from "@/components/Products/ProductDetails";
import { getProductSchema } from "@/lib/seo/schema";

import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
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
    notFound();
  }

  let product;
  let categories;

  try {
    product = await getProductById(Number(id));
    categories = await getProductCategory();
  } catch (error) {
    notFound();
  }

  const category = categories.data.find(
    (c) => c.id === product.data.productCategoryId,
  );

  const categoryName = slugify(category?.name || "", { lower: true });

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getProductSchema(product.data)),
          }}
        />
      </head>
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
