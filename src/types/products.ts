export type Products = {
  id?: number;
  name: string;
  description?: string;
  productCategoryId: number;
  manufacturer: string;
  imageUrls?: string[];
  isActive: boolean;
};

export type ProductCategory = {
  id: number;
  name: string;
  imageUrl: string;
};
