import { Component,  forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  template: `
    <label class="label label-required" for="date">Date</label>
    <input #dateInput id="date" class="input" type="text" name="date" placeholder="date dd/mm/yyyy"
      (keyup)="onKeyUp($event, dateInput.value)" (blur)="onBlur()" [value]=value/>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInputComponent),
    multi: true
  }],
})
export class DateInputComponent implements ControlValueAccessor {
  currentValue: string;

  onKeyUp(event: KeyboardEvent, value: string = '') {
    if (value !== this.value) {
      this.value = value;
    }
  }

  onBlur() {
    this.onTouched();
  }

  set value(newValue) {
    this.currentValue = newValue;
    this.onChange(newValue);
  }

  get value( ) {
    return this.currentValue;
  }

  onChange = (i) => {};
  onTouched = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    if (value !== this.currentValue) {
      this.currentValue = value;
    }
  }
}
