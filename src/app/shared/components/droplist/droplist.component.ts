import { Component, OnInit, Input, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.less']
})
export class DroplistComponent implements OnInit {
  @Input() items: string[];
  @Input() value: string;
  @Input() droplistId: string;
  @Output() dropdownValueChanged = new EventEmitter<string>();

  private checkbox: HTMLInputElement;

  @HostListener('body:click', ['$event'])
  onclick(event: any): void {
    const droplist: HTMLElement = event.target.closest('app-droplist');
    if (!droplist || (droplist && droplist.getAttribute('droplistId') !== this.droplistId)) {
      this.checkbox.checked = false;
    }
  }

  constructor(private el: ElementRef) { }

  ngOnInit() {
      const nativeElement: HTMLElement = this.el.nativeElement;
      this.checkbox = nativeElement.querySelector('.droplist__input');
  }

  onClick(item: string): void {
      this.value = item;
      this.checkbox.checked = false;
      this.dropdownValueChanged.emit(item);
  }
}
