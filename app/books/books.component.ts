import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../books/book.component';

import { BooksService } from '../books/books.service';

@Component({
	moduleId: module.id,
	selector: 'books',
	styleUrl: 'books.style.css'
	directives: [
		BookComponent
	],
	template: `
		<ul *ngIf="this.books !== null && this.books.length > 0">
      <li *ngFor="let book in this.books"><book book="book"></book></li>
    </ul>
	`
})
export class BooksComponent: OnInit { 

  books: Array<IBook> = null;

	constructor(
    private _externLibsService: ExternLibsService,
    private _booksService: BooksService
  ){

	}

	ngOnInit(){
		let moment = this._externLibsService.moment();
		this.currentDate: moment().format();

    this.books = _booksService.getBooks();
	}
}