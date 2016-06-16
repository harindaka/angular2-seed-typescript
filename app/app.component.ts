import { Component } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { SpinnerComponent } from './common/spinner/spinner.component';
import { HomeComponent } from './home/home.component';

import { ExternLibsService } from './common/extern-libs/extern-libs.service';
import { ConfigService } from './common/config/config.service';
import { SpinnerService } from './common/spinner/spinner.service';
import { BooksService } from './books/books.service';

@Component({
  	moduleId: module.id,
	selector: 'app',
	styleUrls: [
		'app.style.css'
	],
	directives: [
		ROUTER_DIRECTIVES,
		HomeComponent,
		SpinnerComponent
	],
	template: `
		<spinner></spinner>
		<span *ngIf="model !== null">
			<div class="container text-center">Using the {{ model.config.environment }} environment configuration.</div>
			<div class="navbar navbar-default">
		        <div class="container-fluid">
		          <div class="navbar-header">
		            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		              <span class="sr-only">Toggle navigation</span>
		              <span class="icon-bar"></span>
		              <span class="icon-bar"></span>
		              <span class="icon-bar"></span>
		            </button>
		            <a class="navbar-brand" href="#">Project name</a>
		          </div>
		          <div id="navbar" class="navbar-collapse collapse">
		            <ul class="nav navbar-nav">
		              <li class="active"><a [routerLink]="['/home']">Home</a></li>
		              <li><a href="#">About</a></li>
		              <li><a href="#">Contact Us</a></li>
		              <li class="dropdown">
		                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
		                <ul class="dropdown-menu">
		                  <li><a href="#">Action</a></li>
		                  <li><a href="#">Another action</a></li>
		                  <li><a href="#">Something else here</a></li>
		                  <li role="separator" class="divider"></li>
		                  <li class="dropdown-header">Nav header</li>
		                  <li><a href="#">Separated link</a></li>
		                  <li><a href="#">One more separated link</a></li>
		                </ul>
		              </li>
		            </ul>
		            <ul class="nav navbar-nav navbar-right">
		              <li class="active"><a href="./">Default <span class="sr-only">(current)</span></a></li>
		              <li><a href="#">Static top</a></li>
		              <li><a href="#">Fixed top</a></li>
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
	{ path: '*', component: HomeComponent },
	{ path: '/', component: HomeComponent },
	{ path: '/home', component: HomeComponent }
])
export class AppComponent { 
	model: any = null;

	constructor(
		private configService: ConfigService,
		private spinnerService: SpinnerService
	){
		let model: any = {};

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
}