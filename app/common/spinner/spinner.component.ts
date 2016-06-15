import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
	moduleId: module.id,	
	selector: 'spinner',
	styleUrls: ['spinner.style.css'],
	template: `
		<div *ngIf="_isVisible" class="loader-modal">
      		<div class="loader-modal-overlay"></div>
      		<div class="loader-vertical-offset">
      			<div class="loader">Loading...</div>
      		</div>
      	</div>
	`
})
export class SpinnerComponent implements OnInit {
		
	_isVisible: boolean = false;

	constructor(private _spinnerService: SpinnerService) {
		_spinnerService.visibilityChanged.subscribe((visibility) => {
			this._isVisible = visibility;
		});
	}

	ngOnInit(){
		
	}
}