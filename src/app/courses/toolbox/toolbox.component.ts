import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.less'],
})
export class ToolboxComponent {
  public searchQuery: string;
  public printedValue: string;

  constructor() { }

  onSearchBtnClick(): void {
    const inputValue: string = this.searchQuery.trim();

    if (inputValue.length > 0) {
      console.log(`Toolbox search input value - '${inputValue}'`);
      this.printedValue = inputValue;
    } else {
      console.log('Toolbox search input is empty');
    }
  }
}
