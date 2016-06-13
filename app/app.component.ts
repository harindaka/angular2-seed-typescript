import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { ExternLibsService } from './common/extern-libs/extern-libs.service';
import { BooksService } from './books/books.service';

@Component({
  	moduleId: module.id,
	selector: 'app',
	directives: [
		HomeComponent
	],
	template: `
		<home></home>
	`,
	providers: [
		ExternLibsService,
		BooksService
	]
})
export class AppComponent { }