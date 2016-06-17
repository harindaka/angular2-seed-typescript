import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'home',
	styleUrls: [
	],
	directives: [
		ROUTER_DIRECTIVES
	],
	template: `
		<span>
			<div class="container">
	  			<div class="jumbotron">
					<h1>Oops! Page Not Found</h1>
					<p>The page you requested does not exist. <a [routerLink]="['/home']">Click here</a> to go back to the main page.</p>					 
				</div>
			</div>
		</span>		
	`
})
export class PageNotFoundComponent implements OnInit { 

	constructor(
		
	){
		
	}

	ngOnInit(){
		
	}
}