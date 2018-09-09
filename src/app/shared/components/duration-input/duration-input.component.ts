import { Component,  forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  template: `
    <label class="label label-required" for="duration">Duration in minutes</label>
    <input #durationInput id="duration" class="input" type="text" name="duration" placeholder="duration"
      (keyup)="onKeyUp($event, durationInput.value)" (blur)="onBlur()" [value]=value/>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationInputComponent),
    multi: true
  }]
})
export class DurationInputComponent implements  ControlValueAccessor {
  currentValue: number | string;

  onKeyUp(event: KeyboardEvent, value: string | number = 0) {
    if (String(value) !== String(this.value)) {
      this.value = String(value);
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
