import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../books/book.component';

import { BooksService, IBook } from '../books/books.service';

@Component({
	moduleId: module.id,
	selector: 'books',
	styleUrls: ['books.style.css'],
	directives: [
		BookComponent
	],
	template: `
		<ul *ngIf="books !== null && books.length > 0">
      <li *ngFor="let book of books"><book [bookData]="book"></book></li>
    </ul>
	`
})
export class BooksComponent implements OnInit { 

  	books: Array<IBook> = null;

	constructor(
		private _booksService: BooksService
	){

	}

	ngOnInit(){		
		this.books = this._booksService.getBooks();
	}
}