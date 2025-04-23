import { ProductCategory } from "@/types/products";
import ProductCategoryCard from "../Card/ProductCategoryCard";
import SectionTitle from "../Common/SectionTitle";
import slugify from "slugify";

interface ProductCategorySectionProps {
  productCategories: ProductCategory[];
}

const ProductCategorySection = ({
  productCategories,
}: ProductCategorySectionProps) => {
  return (
    <>
      <section id="service-section" className="pt-8 md:pt-12 lg:pt-20">
        <div className="container">
          {/* <SectionTitle
            title="Our Services"
            paragraph="Explore our high-performance insulated panels engineered for industrial and commercial excellence."
            center
          /> */}

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 p-5 md:grid-cols-3 lg:grid-cols-4">
            {productCategories.map((category, index) => (
              <ProductCategoryCard
                key={index}
                name={category.name}
                image={category.imageUrl}
                href={`/products?category=${slugify(category.name, { lower: true })}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategorySection;
