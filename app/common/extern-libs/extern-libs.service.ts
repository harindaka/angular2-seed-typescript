import { Injectable } from '@angular/core';

declare var $: any;
declare var jQuery: any;
declare var moment: any;
declare var merge: any;
declare var Decimal: any;
declare var Lazy: any;
declare var toastr: any;

@Injectable()
export class ExternLibsService {
	toasterDefaults : any = {
		  "closeButton": true,
		  "debug": false,
		  "newestOnTop": true,
		  "progressBar": true,
		  "positionClass": "toast-top-full-width",
		  "preventDuplicates": true,
		  "onclick": null,
		  "showDuration": "300",
		  "hideDuration": "1000",
		  "timeOut": "5000",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
	};

	constructor() { 
		
	}

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

	toastr(): any {

		toastr.options = this.toasterDefaults;
		return toastr;
	}
}