import { Component } from '@angular/core';

@Component({
    selector: 'app-toolbox',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.less'],
})
export class ToolboxComponent {

    public searchQuery = null;

    constructor() { }

    onSearhBtnClick(): void {
        const inputValue: string = this.searchQuery.trim();

        if (inputValue.length > 0) {
            console.log(`Toolbox search input value - '${inputValue}'`);
        } else {
            console.log('Toolbox search input is empty');
        }
    }
}
