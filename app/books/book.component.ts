import { Component, Input, OnInit } from '@angular/core';

import { IBook } from './books.service';

@Component({
	moduleId: module.id,
	selector: 'book',
	styleUrls: ['book.style.css'],
	directives: [  		
	],
	template: `
		<div *ngIf="bookData !== null">{{ bookData.title }} by {{ bookData.author }} ({{ bookData.price }})</div>
    	<button>Details</button>
	`
})
export class BookComponent implements OnInit { 

  	@Input() bookData: any;
  	@Input() title: string;

	constructor(){

	}

	ngOnInit(){
		
	}
}