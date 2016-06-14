import { Component, Input, OnInit } from '@angular/core';

import { IBook } from './books.service';

@Component({
	moduleId: module.id,
	selector: 'book',
	styleUrls: [
		'book.style.css'
	],
	directives: [  		
	],
	template: `
		<span *ngIf="bookData !== null">			
			<a href="#">
				<span>
					<h4 class="row container list-group-item-heading">
				        {{ bookData.title }}
				    </h4>			      
				    <span class="row list-group-item-text">
				        {{ bookData.author }}
				    </span>
				</span>
			</a>
			<span class="pull-right clearfix">
				<button class="btn btn-info price-button">({{ bookData.price | currency:'USD':true:'1.2-2' }})</button>
			</span>						
		</span>    	
	`
})
export class BookComponent implements OnInit { 

  	@Input() bookData: IBook;
  	@Input() title: string;

	constructor(){

	}

	ngOnInit(){
		
	}
}