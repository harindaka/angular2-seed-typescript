import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksComponent } from '../top-sellers/books.component';
import { BookDetailsComponent } from '../top-sellers/book-details.component';

import { MomentFormatterPipe } from '../common/moment-formatter/moment-formatter.pipe';

import { IBook } from '../top-sellers/books.service';

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
			<div class="jumbotron">
				<h1>{{ model.config.companyName }}</h1>
				<p>Welcome! Checkout our top sellers <a (click)="onTopSellersClick()" class="mouse-hand">here</a>.</p> 
			</div>
		</span>
	`
})
export class HomeComponent implements OnInit { 

	model: any = null

	constructor(
		private router: Router,
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

		this.configService.getConfig().finally(() => {			
			this.spinnerService.hide();
		}).subscribe((result) => {
			model.config = result;

			this.model = model;			
		}, (e) => {			
			console.log(e);
		});
	}

	onBookSelected(book: IBook){
		if(this.model !== null){
			this.model.selectedBook = book;
		}
	}

	onTopSellersClick(){
		this.router.navigate(['/top-sellers']);
	}
}