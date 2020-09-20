import {Language} from './language';
import {Author} from './author';
import {SubCategory} from './sub-category';

export interface Book {
  title: string;
  description: string;
  image: string;
  price: number;
  language: Language;
  author: Author;
  subCategory: SubCategory;


}
