import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../books/book.component';

import { BooksService, IBook } from '../books/books.service';

@Component({
	moduleId: module.id,
	selector: 'books',
	styleUrls: [
		'books.style.css'
	],
	directives: [
		BookComponent
	],
	template: `
		<div class="container col-md-6">
			<ul *ngIf="books !== null && books.length > 0" class="list-group">
		      <li *ngFor="let book of books" class="list-group-item clearfix">
		      	<book [bookData]="book"></book>
		      </li>
		    </ul>
	    </div>
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