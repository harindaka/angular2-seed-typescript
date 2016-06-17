import { ExceptionHandler } from '@angular/core';
import { Router } from '@angular/router';

export class ErrorHandler extends ExceptionHandler{

	constructor(
	  	private router: Router 
	){
		super(null, null);

	}

	call(error, stackTrace = null, reason = null) {
		console.log(error);
	    this.router.navigate(['/error']); //error._originalException.message
	}
}