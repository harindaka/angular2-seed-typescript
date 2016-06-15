import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService{

	_isVisible: Subject<boolean> = null;

	constructor(){
		this._isVisible = new Subject<boolean>();
	}

	show(){
		this._isVisible.next(true);
	}

	hide() {
		this._isVisible.next(false);
	}

	getSpinnerVisibility(): Observable<boolean>{
		return this._isVisible;
	}
}