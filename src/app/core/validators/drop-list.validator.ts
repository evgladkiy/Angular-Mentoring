import { AbstractControl } from '@angular/forms';

export const dropListValidator = (control: AbstractControl): { [key: string]: any } | null => {
  const value = control.value.toLowerCase();

  return value.indexOf('select') < 0 ? null : { notSelected: true };
};
