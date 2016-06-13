import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app',
	styleUrl: 'home.style.css'
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
export class HomeComponent: OnInit { 

	currentDate: any = null;
	config: { companyName: 'Acme' };

	constructor(private _externLibsService: ExternLibsService){

	}

	ngOnInit(){
		let moment = this._externLibsService.moment();
		this.currentDate: moment().format();
	}
}