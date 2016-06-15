import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

import { provide, ExceptionHandler } from '@angular/core';
import { AppExceptionHandler } from './common/app-exception-handler';

bootstrap(AppComponent, [provide(ExceptionHandler, {useClass: AppExceptionHandler})]);


