import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

import { provide, ExceptionHandler } from '@angular/core';
import { AppExceptionHandler } from './common/app-exception-handler/app-exception-handler';

import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(ExceptionHandler, {useClass: AppExceptionHandler})
]);


