import { SubCategory } from './sub-category.model';

export interface Category {
  name: string;
  image: string;
  subcategories: SubCategory[];
}
