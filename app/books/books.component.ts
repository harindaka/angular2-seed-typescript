import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookComponent } from '../books/book.component';

import { BooksFilterPipe } from './books-filter.pipe';

import { SpinnerService } from '../common/spinner/spinner.service';
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
	pipes: [
		BooksFilterPipe
	],
	template: `
		<span class="container col-md-6">
			<ul *ngIf="books !== null && books.length > 0" class="list-group">
		      <li *ngFor="let book of books | booksFilter: ['Lord']" class="list-group-item clearfix">
		      	<book [bookData]="book" (bookSelected)="onBookSelected($event)" ></book>
		      </li>
		    </ul>
	    </span>
	`
})
export class BooksComponent implements OnInit { 

  	books: Array<IBook> = null;
  	@Output() bookSelected: EventEmitter<IBook> = new EventEmitter<IBook>();

	constructor(
		private _spinnerService: SpinnerService,
		private _booksService: BooksService
	){

	}

	ngOnInit(){	
		this._spinnerService.show();

		this._booksService.getBooks().subscribe((booksList) => {
			this.books = booksList;
			this._spinnerService.hide();
		}, ()=>{
			this._spinnerService.hide();
		});
	}

	onBookSelected(book: IBook){
		this.bookSelected.emit(book);
	}
}