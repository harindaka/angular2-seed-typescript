import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'momentFormatter'
})

export class MomentFormatterPipe implements PipeTransform{
	transform(value: any, args: string[]): string{
		if(typeof value === 'undefined' || value === null){
			return '';
		}
		else{
			let formatterString = 'datetime';
			if(args.length > 0){
				if(args[0] !== null){
					formatterString = args[0];
				}
			}
			
			if(formatterString === 'date'){
				return value.format('YYYY-MM-DD');
			}
			else if(formatterString === 'time'){
				return value.format('hh:mm:ss A');	
			}
			else if(formatterString === 'datetime'){
				return value.format('YYYY-MM-DD hh:mm:ss A');	
			}
			else{
				return value.format(formatterString);
			}
		}
	}
}