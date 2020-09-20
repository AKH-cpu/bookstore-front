import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../controller/services/book.service';
import {Book} from '../../../controller/models/book';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {

  books: Book[] = [];
  imgSrc = '/assets/img/books';

  constructor(private bookService: BookService) {
  }


  ngOnInit(): void {
    this.getBestSellerBooks();
  }

  getBestSellerBooks() {
    this.bookService.getBestSellerBooks().subscribe(
      data => {
        this.books = data;
        console.log(data);
      }
    );
  }


}
