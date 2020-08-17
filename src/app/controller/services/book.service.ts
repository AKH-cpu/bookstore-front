import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'http://localhost:8090/books';

  constructor(private http: HttpClient) {
  }

  getBestSellerBooks() {
    return this.http.get<Array<Book>>(`${this.url}/bestsellers`);

  }
}
