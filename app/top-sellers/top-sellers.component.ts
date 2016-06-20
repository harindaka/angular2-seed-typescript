import { Component, OnInit } from '@angular/core';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details.component';

import { MomentFormatterPipe } from '../common/moment-formatter/moment-formatter.pipe';

import { IBook } from './books.service';

import { ExternLibsService } from '../common/extern-libs/extern-libs.service';
import { SpinnerService } from '../common/spinner/spinner.service';

@Component({
	moduleId: module.id,
	selector: 'home',
	styleUrls: [
	],
	directives: [
		BooksComponent,
		BookDetailsComponent
	],
	pipes: [
		MomentFormatterPipe
	],
	template: `
		<span *ngIf="model !== null">
			<div class="panel panel-default">
			  	<div class="panel-body">
			    	<books (bookSelected)="onBookSelected($event)">Loading top sellers...</books>
					<book-details [bookData]="model.selectedBook"></book-details>
				</div>			  	
			  	<div class="panel-footer">*as at {{model.currentDate | momentFormatter: ['date']}}</div>
			</div>
		</span>
	`
})
export class TopSellersComponent implements OnInit { 

	model: any = null

	constructor(
		private externLibsService: ExternLibsService,
		private spinnerService: SpinnerService
	){

	}

	ngOnInit(){
		let model = {
			selectedBook: null,
			currentDate: null
		}; 
		
		let moment = this.externLibsService.moment();
		model.currentDate = moment();

		this.model = model;
	}

	onBookSelected(book: IBook){
		if(this.model !== null){
			this.model.selectedBook = book;
		}
	}
}