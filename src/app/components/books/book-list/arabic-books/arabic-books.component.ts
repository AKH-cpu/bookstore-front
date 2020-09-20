import {Component, OnInit} from '@angular/core';
import {Book} from '../../../../controller/models/book';
import {BookService} from '../../../../controller/services/book.service';

@Component({
  selector: 'app-arabic-books',
  templateUrl: './arabic-books.component.html',
  styleUrls: ['./arabic-books.component.css']
})
export class ArabicBooksComponent implements OnInit {

  arabicBooks: Book[] = [];
  totalRecords: number;
  page = 1;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getArabicBooks();
  }

  getArabicBooks() {
    this.bookService.getBooksByLanguage('Arabic').subscribe(data => {
        this.arabicBooks = data;
        this.totalRecords = data.length;
      }
    );
  }

}
