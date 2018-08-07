import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Trainer } from '../../models';

@Component({
  selector: 'app-tag-it',
  templateUrl: './tag-it.component.html',
  styleUrls: ['./tag-it.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagItComponent implements OnInit {
  @Input() items: Trainer[];
  @Input() tagItId: string;
  @Output() tagItValueChanged = new EventEmitter<Trainer[]>();

  public newItemName = '';
  private newItemId: number;
  private focusBorderColor = '#30b6dd';
  private tagIt: HTMLElement;

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
    this.tagIt = nativeElement.querySelector('.tag-it');
    this.newItemId = this.items.reduce((acc, item) => (
      Number(item.id) >= acc ? Number(item.id) + 1 : acc
    ), 1);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.keyCode === 13 && this.newItemName.trim()) {
      this.items.push(this.createTrainer());
      this.tagItValueChanged.emit(this.items);
    }
  }

  onBlur(): void {
    if (this.newItemName.trim()) {
      this.items.push(this.createTrainer());
      this.tagItValueChanged.emit(this.items);
    }

    this.tagIt.style.borderColor = '';
  }

  onFocus(): void {
    this.tagIt.style.borderColor = this.focusBorderColor;
  }

  onClick(id: string): void {
    this.items = this.items.filter(
      item => item.id !== id);
    this.tagItValueChanged.emit(this.items);
  }
}