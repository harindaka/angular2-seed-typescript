import { Component } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { SpinnerComponent } from './common/spinner/spinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TopSellersComponent } from './top-sellers/top-sellers.component';

import { ExternLibsService } from './common/extern-libs/extern-libs.service';
import { ConfigService } from './common/config/config.service';
import { SpinnerService } from './common/spinner/spinner.service';
import { BooksService } from './top-sellers/books.service';

@Component({
  	moduleId: module.id,
	selector: 'app',
	styleUrls: [
		'app.style.css'
	],
	directives: [
		ROUTER_DIRECTIVES,
		SpinnerComponent,
		HomeComponent,		
		TopSellersComponent
	],
	template: `
		<spinner></spinner>
		<span *ngIf="model !== null">
			<div class="navbar navbar-default">
		        <div class="container-fluid">
		          <div class="navbar-header">		            
		            <a [routerLink]="['/']" class="navbar-brand">{{model.config.companyName}}</a>
		          </div>
		          <div id="navbar" class="navbar-collapse collapse">
		            <ul class="nav navbar-nav">
		              <li class="active"><a [routerLink]="['/']">Home</a></li>
		              <li><a [routerLink]="['/top-sellers']">Top Sellers</a></li>
		            </ul>		            
		          </div>
		        </div>
		    </div>
		    
			<div class="body">
				<router-outlet></router-outlet>
			</div>
		<span>
	`,
	providers: [
		ROUTER_PROVIDERS,
		ExternLibsService,
		ConfigService,
		SpinnerService,
		BooksService
	]
})
@Routes([			
	{ path: '/', component: HomeComponent },
	{ path: '/top-sellers', component: TopSellersComponent },


	//BEGIN: The PageNotFoundComponent needs to be the last route
	{ path: '*', component: PageNotFoundComponent }	
	//END: The PageNotFoundComponent needs to be the last route
])
export class AppComponent { 
	model: any = null;

	constructor(
		private configService: ConfigService,
		private externLibsService: ExternLibsService,
		private spinnerService: SpinnerService
	){
		let model: any = {};

		this.spinnerService.show();

		this.configService.getConfig().finally(() => {			
			this.spinnerService.hide();
		}).subscribe((result) => {
			model.config = result;

			let environment = model.config.environment.toLowerCase();
			if(environment !== 'production'){
				let toastr = this.externLibsService.toastr();
				toastr.info('Using the ' + environment + ' environment configuration...', null, { timeOut: 1000 });
			}

			this.model = model;			
		}, (e) => {			
			console.log(e);
		});
	}
}