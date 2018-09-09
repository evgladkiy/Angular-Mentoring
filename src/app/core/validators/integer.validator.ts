import { AbstractControl } from '@angular/forms';

export const integerValidator = (control: AbstractControl): { [key: string]: any } | null => {
  return Number.isInteger(Number(control.value)) ? null : { notInteger: true };
};
