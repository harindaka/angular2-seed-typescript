import { ExceptionHandler } from '@angular/core';
import { Router } from '@angular/router';

export class ErrorHandler extends ExceptionHandler{


	constructor(
	  	//private router: Router 
	){
		super(null, null);

	}

	call(error, stackTrace = null, reason = null) {
		alert("Oops! The application will now relaod since the following unexpected error occurred: " + ((error._originalException) ? error._originalException.message : error.message));
		console.log(error);
		window.location.href = "/";
	    //this.router.navigate(['/error']); //error._originalException.message
	}
}