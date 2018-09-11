import { Component, Input, ElementRef, ChangeDetectionStrategy,
  forwardRef, HostListener, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Trainer } from '../../models';

@Component({
  selector: 'app-tag-it',
  templateUrl: './tag-it.component.html',
  styleUrls: ['./tag-it.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagItComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagItComponent implements OnChanges, AfterViewInit, ControlValueAccessor {
  @Input() allItems: Partial<ReadonlyArray<Trainer>>;
  @Input() tagItId: string;

  private tagItInput: HTMLInputElement;
  public shouldShowList = false;
  public newItemName = '';
  public itemsForList: any;
  public itemsForListLetters: string[];
  public currentValue: Trainer[];

  @HostListener('body:click', ['$event'])
  onclick(event: any): void {
    const targetEl: HTMLElement = event.target;
    const closestTagIt = <HTMLElement>targetEl.closest('app-tag-it');
    const closestCloseBtn = <HTMLElement>targetEl.closest('.delete-btn');

    if (!closestTagIt && !closestCloseBtn) {
      this.shouldShowList = false;
    } else {
      this.tagItInput.focus();
    }
  }

  constructor(private el: ElementRef) { }

  private createTrainer(name: string): Trainer {
    return  <Trainer>{
      id: String(Math.random()),
      name: name,
      avatar: `https://randomuser.me/api/portraits/men/${12}.jpg`
    };
  }

  private updateItemsForList(items): void {
    this.itemsForList = items.reduce((acc, item) => {
      const firstLetter = item.name[0].toUpperCase();

      acc[firstLetter] ? acc[firstLetter].push(item) : acc[firstLetter] = [item];

      return acc;
    }, {});
    this.itemsForListLetters = Object.keys(this.itemsForList);
  }

  ngAfterViewInit(): void {
    this.tagItInput = this.el.nativeElement.querySelector(`#${this.tagItId}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.allItems) {
      this.updateItemsForList(changes.allItems.currentValue);
    }
  }

  onItemClick(addedTrainer: Trainer): void {
    const trainerIndex = this.value
      .findIndex(trainer => trainer.id === addedTrainer.id);

    if (trainerIndex < 0) {
      this.value = [...this.value, addedTrainer];
    }
  }

  onCloseBtnClick(): void {
    this.shouldShowList = false;
  }

  onAddBtnClick(value: string): void {
    const newTrainer = this.createTrainer(value);

    this.value = [...this.value, newTrainer];
    this.newItemName = '';
    this.updateItemsForList(this.allItems);
  }

  onClearBtnClick(): void {
    this.newItemName = '';
    this.updateItemsForList(this.allItems);
  }

  onModelChanged(value: string): void {
    const lowwerValue = value.toLocaleLowerCase();
    const filtedItems = this.allItems
      .filter(({ name }) => name.toLocaleLowerCase().indexOf(lowwerValue) >= 0);

    this.updateItemsForList(filtedItems);
  }

  onFocus(): void {
    this.shouldShowList = true;
  }

  onBlur(): void {
    this.onTouched();
  }

  onDeleteItem(id: string): void {
    this.value = this.value.filter(item => item.id !== id);
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
