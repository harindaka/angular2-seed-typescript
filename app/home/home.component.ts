import { Component, OnInit } from '@angular/core';
import { BooksComponent } from '../books/books.component';

import { MomentFormatter } from '../common/pipes/moment-formatter.pipe';

import { ExternLibsService } from '../common/extern-libs/extern-libs.service';

@Component({
	moduleId: module.id,
	selector: 'home',
	styleUrls: ['home.style.css'],
	directives: [
		BooksComponent
	],
	pipes: [
		MomentFormatter
	],
	template: `
		<div class="container">
  			<div class="jumbotron">
				<h1>{{ config.companyName }} Book Store</h1>
				<p>Welcome! Checkout our top sellers below.</p> 
			</div>
		</div>
		<hr/>
		<div class="row">
			<books></books>
		</div>
		<div class="row">
			<p>*As at {{ currentDate | momentFormatter: ['datetime'] }}</p>	
		</div>	
	`
})
export class HomeComponent implements OnInit { 

	currentDate: any = null;
	config = { companyName: 'Acme' };

	constructor(private _externLibsService: ExternLibsService){

	}

	ngOnInit(){
		let moment = this._externLibsService.moment();
		this.currentDate = moment();
	}
}