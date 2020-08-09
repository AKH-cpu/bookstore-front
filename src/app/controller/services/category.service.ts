import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category';
import {SubCategory} from '../models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:8090/categories';

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Array<Category>>(this.url);
  }


}
