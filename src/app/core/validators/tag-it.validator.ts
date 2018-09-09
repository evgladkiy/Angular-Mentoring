import { AbstractControl } from '@angular/forms';

export const tagItValidator = (control: AbstractControl): { [key: string]: any } | null => {
  return control.value.length >= 1 ? null : { notSelected: true };
};
