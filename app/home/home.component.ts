import { Component, OnInit } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { BookDetailsComponent } from '../books/book-details.component';

import { MomentFormatterPipe } from '../common/pipes/moment-formatter.pipe';

import { IBook } from '../books/books.service';

import { ExternLibsService } from '../common/extern-libs/extern-libs.service';

@Component({
	moduleId: module.id,
	selector: 'home',
	styleUrls: ['home.style.css'],
	directives: [
		BooksComponent,
		BookDetailsComponent
	],
	pipes: [
		MomentFormatterPipe
	],
	template: `
		<div class="container">
  			<div class="jumbotron">
				<h1>{{ config.companyName }} Book Store</h1>
				<p>Welcome! Checkout our top sellers as at {{ currentDate | momentFormatter: ['date'] }} below.</p> 
			</div>
		</div>
		<hr/>
		<div class="row">
			<books (bookSelected)="onBookSelected($event)"></books>
			<book-details [bookData]="selectedBook"></book-details>
		</div>
		<hr/>
	`
})
export class HomeComponent implements OnInit { 

	selectedBook: IBook = null;
	currentDate: any = null;
	config = { companyName: 'Acme' };

	constructor(private _externLibsService: ExternLibsService){

	}

	ngOnInit(){
		let moment = this._externLibsService.moment();
		this.currentDate = moment();
	}

	onBookSelected(book: IBook){
		this.selectedBook = book;
	}
}