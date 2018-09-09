import { Component, Input, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DroplistComponent),
    multi: true
  }]
})
export class DroplistComponent implements ControlValueAccessor {
  @Input() items: string[];
  @Input() droplistId: string;

  public checked = false;
  currentValue: string;

  @HostListener('body:click', ['$event'])
  onclick(event: any): void {
    const droplist: HTMLElement = event.target.closest('app-droplist');
    if (!droplist || (droplist && droplist.getAttribute('droplistId') !== this.droplistId)) {
      if (this.checked) {
        this.onTouched();
        this.checked = false;
      }
    }
  }

  onClick(item: string): void {
      this.value = item;
      this.checked = false;
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
