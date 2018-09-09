import { AbstractControl } from '@angular/forms';

export const dateValidator =  (control: AbstractControl): { [key: string]: any } | null => {
  const valueArr = (control.value).split('/');

  if (valueArr.length === 3) {
    const day = valueArr[0].trim();
    const month = valueArr[1].trim();
    const year = valueArr[2].trim();

    const isDayValid = (day.length === 1 || day.length === 2) && Number(day);
    const isMonthValid = (month.length === 1 || month.length === 2) && Number(month);
    const isYearValid = year.length === 4 && Number(year);


    if (isDayValid && isMonthValid && isYearValid) {
      return null;
    }
  }

  return { invalidDate: true };
};
