import { Pipe, PipeTransform } from '@angular/core';

import { IBook } from './books.service';
import { ExternLibsService } from '../common/extern-libs/extern-libs.service';

@Pipe({
	name: 'booksFilter'
})

export class BooksFilterPipe implements PipeTransform{

	lazyjs: any = null;

	constructor(_externLibsService: ExternLibsService){
		this.lazyjs = _externLibsService.lazyjs();
	}

	transform(value: Array<IBook>, args: string[]): any{
		if(typeof value === 'undefined' || value === null || value.length <= 0){
			return null;
		}
		else{
			let filterString = '';

			if(args[0].length > 0){
				filterString = args[0];
			}

			return this.lazyjs(value).filter((book) => {
				return ((book.title.indexOf(filterString) > -1) || (book.author.indexof(filterString) > -1))
			}).toArray();
		}
	}
}