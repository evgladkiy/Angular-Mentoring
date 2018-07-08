import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.less'],
})
export class ToolboxComponent {
  public searchQuery = '';

  @Output() filtred = new EventEmitter<string>();

  constructor() { }

  onFilterBtnClick(): void {
    if (this.searchQuery.trim() !== '') {
      this.filtred.emit(this.searchQuery.toLowerCase());
    }
  }
}
