import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

import { provide, ExceptionHandler } from '@angular/core';
import { AppExceptionHandler } from './common/app-exception-handler/app-exception-handler';

import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	provide(ExceptionHandler, {useClass: AppExceptionHandler})
]);


