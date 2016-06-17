import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'home',
	styleUrls: [
	],
	directives: [		
	],
	template: `
		<span>
			<div class="container">
	  			<div class="jumbotron">
					<h1>Oops! Something went wrong.</h1>
					<p>There was an unexpected error. <a href="#" (click)="onLinkClicked()">Click here</a> to reload the application.</p>					 
				</div>
			</div>
		</span>		
	`
})
export class ErrorHandlerComponent implements OnInit { 

	routeParamsSubscription: any;

	constructor(
		
	){

	}

	ngOnInit(){
		//routeParamsSubscription = this.route.params.subscribe((result) => {

		//})
	}

	onLinkClicked(){
		window.location.href = '/';
	}
}