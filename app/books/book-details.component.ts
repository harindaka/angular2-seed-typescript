import { Component, Input, OnInit } from '@angular/core';

import { IBook } from './books.service';

@Component({
	moduleId: module.id,
	selector: 'book-details',
	styleUrls: [
		'book-details.style.css'
	],
	directives: [  		
	],
	template: `
		<span *ngIf="bookData !== null" class="container col-md-6">	
			<img [src]="bookData.imageUrl" [alt]="bookData.title" class="img-thumbnail" width="300em" height="300em"/>
			<br/>
			<br/>
			<dl>
			  <dt>Title</dt><dd>{{ bookData.title }}</dd>
			  <dt>Author</dt><dd>{{ bookData.author }}</dd>
			  <dt>Price</dt><dd>{{ bookData.price }}</dd>
			</dl>
			<button class="btn btn-success">Purchase</button>				
		</span>
		<span *ngIf="bookData === null" class="col-md-6">
			<br/>
			<span class="well well-lg">Select book to view details...</span>	
		</span>
	`
})
export class BookDetailsComponent implements OnInit { 

  	@Input() bookData: IBook;  	

	constructor(){

	}

	ngOnInit(){
		
	}
}