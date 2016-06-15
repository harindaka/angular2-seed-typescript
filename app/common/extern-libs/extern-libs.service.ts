import { Injectable } from '@angular/core';

declare var $: any;
declare var jQuery: any;
declare var moment: any;
declare var merge: any;
declare var Decimal: any;
declare var Lazy: any;

@Injectable()
export class ExternLibsService {
	constructor() { }

	jquery(): any {
		return $;
	}

	moment(): any {
		return moment;
	}

	merge(): any {
		return merge;
	}

	decimal(): any {
		return Decimal;
	}

	lazyjs(): any {
		return Lazy;
	}
}