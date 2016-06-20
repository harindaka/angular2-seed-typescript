import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookComponent } from './book.component';

import { BooksFilterPipe } from './books-filter.pipe';

import { SpinnerService } from '../common/spinner/spinner.service';
import { BooksService, IBook } from './books.service';

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
		<span *ngIf="model !== null" class="container col-md-6">
			<ul *ngIf="model.books !== null && model.books.length > 0" class="list-group">
				<div class="row">
		            <span class="form-group col-md-12">		                
		                <input type="text" [(ngModel)]="filterString" placeholder="Enter title or author to filter..." class="form-control"/>
		            </span>
		        </div>
		      	<li *ngFor="let book of model.books | booksFilter: [filterString]" class="list-group-item clearfix">
		      		<book [bookData]="book" (bookSelected)="onBookSelected($event)"></book>
		      	</li>
		    </ul>
	    </span>
	`
})
export class BooksComponent implements OnInit { 
  	
  	@Output() bookSelected: EventEmitter<IBook> = new EventEmitter<IBook>();
  	filterString: string = null;

  	model: any = null;

	constructor(
		private spinnerService: SpinnerService,
		private booksService: BooksService
	){

	}

	ngOnInit(){	
		let model: any = {};

		this.spinnerService.show();

		this.booksService.getBooks().finally(() => {
			this.spinnerService.hide();
		}).subscribe((booksList) => {			
			model.books = booksList;

			this.model = model;			
		}, (e)=>{
			console.log(e);
		});
	}

	onBookSelected(book: IBook){
		this.bookSelected.emit(book);
	}
}