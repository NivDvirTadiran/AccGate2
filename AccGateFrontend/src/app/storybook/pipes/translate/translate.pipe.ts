import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from "./translate.service";


@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
/*
  constructor(private translaeService: TranslaeService) {}

  public static lang  = 'eng';

  transform(value: any, args?: any): any {
    this.translaeService.lang = (args == null ? TranslatePipe.lang : args.lang); //args.lang;
  //  return this.translaeService.languageMessage(value)    }
*/
  constructor(private _translate: TranslateService) { }
  transform(value: string): any {
    if (!value) return;
    return this._translate.instant(value);
  }
}
