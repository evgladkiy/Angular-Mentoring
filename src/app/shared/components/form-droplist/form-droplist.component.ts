import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Trainer } from '../../models';

@Component({
  selector: 'app-form-droplist',
  templateUrl: './form-droplist.component.html',
  styleUrls: [ './form-droplist.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDroplistComponent implements OnInit {
  @Input() items: Trainer[];
  @Output() droplistValueChanged = new EventEmitter<Trainer[]>();

  private newItemId: number;
  public newItemName = '';
  private focusBorderColor = '#30b6dd';
  private dropList: HTMLElement;

  constructor(private el: ElementRef) { }

  private createTrainer(): Trainer {
    const newItem: Trainer = {
      id: String(this.newItemId),
      name: this.newItemName,
      avatar: `https://randomuser.me/api/portraits/men/${this.newItemId++}.jpg`
    };

    this.newItemName = '';

    return newItem;
  }

  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    this.dropList = nativeElement.querySelector('.droplist');
    this.newItemId = this.items.reduce((acc, item) => (
      Number(item.id) >= acc ? Number(item.id) + 1 : acc
    ), 1);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.keyCode === 13 && this.newItemName.trim()) {
      this.items.push(this.createTrainer());
      this.droplistValueChanged.emit(this.items);
    }
  }

  onBlur(): void {
    if (this.newItemName.trim()) {
      this.items.push(this.createTrainer());
      this.droplistValueChanged.emit(this.items);
    }

    this.dropList.style.borderColor = '';
  }

  onFocus(): void {
    this.dropList.style.borderColor = this.focusBorderColor;
  }

  onClick(id: string): void {
    this.items = this.items.filter(
      item => item.id !== id);
    this.droplistValueChanged.emit(this.items);
  }
}
