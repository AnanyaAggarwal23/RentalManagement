import { Category } from './category.model';

export interface Branch {
  name: string;
  branch_id: string;
  categories: Category[];
}
