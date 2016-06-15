import { ExceptionHandler } from '@angular/core';

export class AppExceptionHandler implements ExceptionHandler {
  call(error, stackTrace = null, reason = null) {
    console.log(error);   
    alert('The following error occurred in the application. Check console log for details: ' + error._originalException.message); 
  }
}