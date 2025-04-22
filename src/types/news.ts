export type News = {
  id: number;
  title: string;
  description?: string;
  imageUrls?: string[];
  date: string;
  isActive: boolean;
};