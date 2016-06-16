import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { ExternLibsService } from '../extern-libs/extern-libs.service';

export type Environments =
    "dev"
    | "qa"
    | "prod";

@Injectable()
export class ConfigService {

	private config: any = null;

	constructor(
		private http: Http,
		private externLibsService: ExternLibsService
	){

	}

	getConfig(environment: Environments = null, refresh: boolean = false){
		if(refresh || this.config === null){	
			let baseConfigUrl: string = '/environments/config.json';
			let baseConfig: any = null;

			return this.http.get(baseConfigUrl).map((res) => {
				return res.json();
			}).flatMap((result) => {
				baseConfig = result;

				if(typeof environment !== 'undefined' && environment !== null){
					let envConfigUrl: string = '/environments/config.' + environment + '.json';
					return this.http.get(envConfigUrl).map((res) => {
						return res.json()
					});
				}else{
					return Observable.of({});
				}
			}).flatMap((envConfig) => {
				let merge = this.externLibsService.merge();
				this.config = merge.recursive(true, baseConfig, envConfig);
				return Observable.of(this.config);
			});
		}else{
			return Observable.of(this.config);
		}
	}
}