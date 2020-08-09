import {SubCategory} from './sub-category';

export interface Category {
  reference: string;
  name: string;
  subCategories: Array<SubCategory>;

}
