import { Component, OnInit } from '@angular/core';
import { BooksComponent } from '../books/books.component';

import { ExternLibsService } from '../common/extern-libs/extern-libs.service'

@Component({
	moduleId: module.id,
	selector: 'home',
	styleUrls: ['home.style.css'],
	directives: [
		BooksComponent
	],
	template: `
		<h1>Welcome to {{ config.companyName }} Book Store!</h1>  		
		<h2>Top Sellers</h2>
		<hr/>
		<books></books>
		<br/>
		<button>Authors</button>
	`
})
export class HomeComponent implements OnInit { 

	currentDate: any = null;
	config = { companyName: 'Acme' };

	constructor(private _externLibsService: ExternLibsService){

	}

	ngOnInit(){
		let moment = this._externLibsService.moment();
		this.currentDate = moment().format();
	}
}