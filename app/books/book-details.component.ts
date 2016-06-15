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
			<button (click)="onAddToCart()" class="btn btn-success">Add to Cart</button>				
		</span>
		<span *ngIf="bookData === null">
			<span class="well well-lg col-md-6">Select book to view details...</span>	
		</span>
	`
})
export class BookDetailsComponent implements OnInit { 

  	@Input() bookData: IBook;  	

	constructor(){

	}

	ngOnInit(){
		
	}

	onAddToCart(){
		alert('This will throw an error for demo purposes');
		throw (new Error('This error was thrown to demonstrate the centralized error handling mechanism'));
	}
}