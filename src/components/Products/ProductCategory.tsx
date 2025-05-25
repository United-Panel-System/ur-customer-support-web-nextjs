import { ProductCategory } from "@/types/products";
import ProductCategoryCard from "../Card/ProductCategoryCard";
import SectionTitle from "../Common/SectionTitle";
import slugify from "slugify";
import { AnimatedDiv } from "../Animation";

interface ProductCategorySectionProps {
  productCategories: ProductCategory[];
}

const ProductCategorySection = ({
  productCategories,
}: ProductCategorySectionProps) => {
  return (
    <>
      <section id="service-section" className="py-8 md:py-12 lg:py-20">
        <div className="container">
          {/* <SectionTitle
            title="Product Categories"
            paragraph="Discover our product categories featuring high-performance insulated panels engineered for excellence in industrial and commercial applications."
            center
          /> */}

          <AnimatedDiv
            variant="slideUp"
            staggerChildren={0.3}
            className="grid grid-cols-1 gap-x-8 gap-y-14 p-5 md:grid-cols-3 lg:grid-cols-4"
          >
            {productCategories.map((category, index) => (
              <ProductCategoryCard
                key={index}
                name={category.name}
                image={category.imageUrl}
                href={`/products?category=${slugify(category.name, { lower: true })}`}
              />
            ))}
          </AnimatedDiv>
        </div>
      </section>
    </>
  );
};

export default ProductCategorySection;
