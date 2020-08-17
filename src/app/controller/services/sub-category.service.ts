import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubCategory} from '../models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  // private url = 'http://localhost:8090/subcategories';
  private url = 'https://kitabi-backend.herokuapp.com/subcategories';


  private subCategories: Array<SubCategory>;

  constructor(private http: HttpClient) {
  }

  findByCategoryReference(reference: string) {
    this.http.get<Array<SubCategory>>(`${this.url}/${reference}`).subscribe(
      res => this.subCategories = res
    );
  }
}
