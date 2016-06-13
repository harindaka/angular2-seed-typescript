import { Component, Input } from '@angular/core';

import { IBook } from './books.service';

@Component({
	moduleId: module.id,
	selector: 'book',
	styleUrl: 'book.style.css'
	directives: [  		
	],
	template: `
		<div *ngIf="">{{ book.title }} by {{ book.author }} (${{ book.price }})</div>
    <button>Details<button>
	`
})
export class BookComponent: OnInit { 

  @Input() book: IBook;

	constructor(){

	}

	ngOnInit(){
		
	}
}