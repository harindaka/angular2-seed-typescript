import { Component, OnInit } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { BookDetailsComponent } from '../books/book-details.component';

import { MomentFormatterPipe } from '../common/moment-formatter/moment-formatter.pipe';

import { IBook } from '../books/books.service';

import { ExternLibsService } from '../common/extern-libs/extern-libs.service';
import { ConfigService } from '../common/config/config.service';
import { SpinnerService } from '../common/spinner/spinner.service';

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
		<span *ngIf="model !== null">
			<div class="container">
	  			<div class="jumbotron">
					<h1>{{ model.config.companyName }} Book Store</h1>
					<p>Welcome! Checkout our top sellers as at {{ model.currentDate | momentFormatter: ['date'] }} below.</p> 
				</div>
			</div>
			<hr/>
			<div class="row">
				<books (bookSelected)="onBookSelected($event)"></books>
				<book-details [bookData]="model.selectedBook"></book-details>
			</div>
			<hr/>
		</span>
	`
})
export class HomeComponent implements OnInit { 

	model: any = null

	constructor(
		private externLibsService: ExternLibsService,
		private configService: ConfigService,
		private spinnerService: SpinnerService
	){

	}

	ngOnInit(){
		let model: any = {}; 
		model.selectedBook = null;

		let moment = this.externLibsService.moment();
		model.currentDate = moment();

		this.spinnerService.show();

		this.configService.getConfig().subscribe((result) => {
			model.config = result;

			this.model = model;
			this.spinnerService.hide();
		});
	}

	onBookSelected(book: IBook){
		if(this.model !== null){
			this.model.selectedBook = book;
		}
	}
}