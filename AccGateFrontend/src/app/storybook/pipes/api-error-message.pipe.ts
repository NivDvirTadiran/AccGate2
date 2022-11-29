import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {ApiErrorMessageService} from "./api-error-message.service";

@Pipe({
  name: 'apiErrorMessage',
  pure: false,
})
export class ApiErrorMessagePipe implements PipeTransform {
    constructor(private apiErrorMessageService: ApiErrorMessageService) {}

    transform(value: any, args?: any): any {
      this.apiErrorMessageService.language = args.language;
      return this.apiErrorMessageService.apiErrorMessage(value)    }

/*    transform(message: string, ...args: unknown[]): unknown {
      const dataToArray = message.split(',').map(item => {item.trim();
        console.log('ApiErrorMessagePipe: '+item.toString() +'   '+ item.trim().toString());
      });

      // convert array to string replacing comma with new line
      return dataToArray.join('\n');
    }
*/
}



