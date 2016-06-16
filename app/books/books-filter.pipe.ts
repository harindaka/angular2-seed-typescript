import { Pipe, PipeTransform } from '@angular/core';

import { IBook } from './books.service';
import { ExternLibsService } from '../common/extern-libs/extern-libs.service';

@Pipe({
	name: 'booksFilter'
})
export class BooksFilterPipe implements PipeTransform{
	
	constructor(
		private externLibsService: ExternLibsService
	){
		
	}

	transform(value: Array<IBook>, args: string[]): any{
		if(typeof value === 'undefined' || value === null || value.length <= 0){
			return null;
		}
		else{
			let filterString = '';

			if(typeof args !== 'undefined' && args !== null && args.length > 0){
				if(typeof args[0] !== 'undefined' && args[0] !== null){
					filterString = args[0];
				}
			}

			filterString = filterString.toLowerCase();
			let lazyjs: any = this.externLibsService.lazyjs();
			return lazyjs(value).filter((book) => {
				return ((book.title.toLowerCase().indexOf(filterString) > -1) || (book.author.toLowerCase().indexOf(filterString) > -1))
			}).toArray();
		}
	}
}