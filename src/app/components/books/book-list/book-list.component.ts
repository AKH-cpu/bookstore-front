import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../controller/services/book.service';
import {Book} from '../../../controller/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  childrenBooks: Book[] = [];
  books: Book[] = [];
  totalRecords: number;
  page = 1;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getChildrenBooks();

  }

  getChildrenBooks() {
    this.bookService.getChildrenBooks().subscribe(
      data => this.childrenBooks = data
    );

  }


}
