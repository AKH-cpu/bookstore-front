import {Component, OnInit} from '@angular/core';
import {Book} from '../../../../controller/models/book';
import {BookService} from '../../../../controller/services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  books: Book[] = [];
  totalRecords: number;
  page = 1;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBooks();
  }


  getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      data => {
        this.books = data;
        this.totalRecords = data.length;
      }
    );

  }

}
