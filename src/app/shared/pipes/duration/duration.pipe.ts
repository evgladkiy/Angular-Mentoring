import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {

  transform(value: number | string): string {
    const duration = Number(value);

    if (!Number.isNaN(duration)) {
      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;

      return `${hours > 0 ? hours + 'h' : '' } ${minutes > 0 ? minutes + 'min' : '' }`;
    }

    return String(value);
  }

}
