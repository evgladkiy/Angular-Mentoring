import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], prop: string): any[] {
    return value.sort((a, b) => Number(a[prop]) - Number(b[prop]));
  }

}
