import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'http://localhost:8090/books';

  private langUrl = 'http://localhost:8090/books/language';

  constructor(private http: HttpClient) {
  }

  getBestSellerBooks() {
    return this.http.get<Array<Book>>(`${this.url}/bestsellers`);

  }

  getChildrenBooks() {
    return this.http.get<Array<Book>>(`${this.url}/subcategory/Children's%20book`);
  }

  getAllBooks() {
    return this.http.get<Array<Book>>(this.url);
  }

  getBooksByLanguage(language: string) {
    return this.http.get<Array<Book>>(`${this.langUrl}/${language}`);
  }

}
