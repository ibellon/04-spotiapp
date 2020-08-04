import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): any {
    return images.length === 0 ? 'assets/img/noimage.png' : images[0].url;
  }

}
