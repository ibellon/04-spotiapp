import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    const url = 'https://open.spotify.com/embed/track/';
    let uri = value.split(':');
    value = uri[2];
    return this.domSanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}
