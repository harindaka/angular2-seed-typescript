import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../config/config.service';
import { ExternLibsService } from '../extern-libs/extern-libs.service';

@Injectable()
export class ApiClientService{

	constructor(
		private http: Http,
		private configService: ConfigService,
		private externLibsService: ExternLibsService
	){

	}
		
	invoke(apiConfig, params): any{
		let config: any = this.configService.getConfig();
		let url = config.api.baseUrl + apiConfig.url;
		let merge = this.externLibsService.merge();

		let mergedParams = {
			url: null,
			query: null,
			headers: null,
			body: null
		};
		if(typeof apiConfig.parameters !== 'undefined' && apiConfig.parameters !== null){
			mergedParams = {
				url: (apiConfig.parameters.url) ? apiConfig.parameters.url : {},
				query: (apiConfig.parameters.query) ? apiConfig.parameters.query : {},
				headers: (apiConfig.parameters.headers) ? apiConfig.parameters.headers : {},				
				body: (apiConfig.parameters.body) ? apiConfig.parameters.body: {},
			}
		}

		if(typeof params.url !== 'undefined' && params.url !== null){
			mergedParams.url = merge.recursive(true, mergedParams.url, params.url);
		}

		if(typeof params.query !== 'undefined' && params.query !== null){
			mergedParams.query = merge.recursive(true, mergedParams.query, params.query);
		}

		if(typeof params.headers !== 'undefined' && params.headers !== null){
			mergedParams.headers = merge.recursive(true, mergedParams.headers, params.headers);
		}

		if(typeof params.body !== 'undefined' && params.body !== null){
			mergedParams.body = merge.recursive(true, mergedParams.body, params.body);
		}
				
        for (let key in mergedParams.url) {
            if (mergedParams.url.hasOwnProperty(key)) {
                url = url.replace(':' + key, encodeURIComponent(mergedParams.url[key]))
            }
        }

        return null;

        // let headers = new Headers()
       	// if(mergedParams.headers)

       	// for(let key in config.api.headers){
       	// 	if (config.api.headers.hasOwnProperty(key)) {
       	// }

        // var restlerOptions = {};

        // restlerOptions.headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': self.config.app.apiServer.authorization,
        //     'x-app-id': self.config.app.apiServer.xAppId
        // }

        // if(typeof(options.query) !== 'undefined' && options.query !== null){
        //     restlerOptions.query = options.query;
        // }

        // if(typeof(options.data) !== 'undefined' && options.data !== null){
        //     restlerOptions.data = options.body;
        // }

        // var restlerMethod = null;
        // if(apiConfig.method === 'delete'){
        //     restlerMethod = 'del';
        // }
        // else{
        //     restlerMethod = apiConfig.method;
        // }

        // return self.q.Promise(function(resolve, reject){
        //     try {
        //         self.restler[restlerMethod](url, restlerOptions).on('complete', function (result, response) {
        //             if(result instanceof Error){
        //                 reject(result);
        //             }
        //             else{
        //                 resolve({
        //                     result: result,
        //                     response: response
        //                 });
        //             }
        //         });
        //     }catch (e){
        //         reject(e);
        //     }
        // });
	}

}