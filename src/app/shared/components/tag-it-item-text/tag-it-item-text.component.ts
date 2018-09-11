import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tag-it-item-text',
  template: `
    <a class="letter-items__list-item btn-container" [innerHTML]="highlightedText"></a>`,
  styleUrls: ['./tag-it-item-text.component.less']
})
export class TagItItemTextComponent implements OnChanges {
  @Input() text: string;
  @Input() textToHighlight: string;

  public highlightedText: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const { firstChange } = changes.textToHighlight;
    const textToHighlightIndex: number = this.text.toLowerCase().indexOf(this.textToHighlight);

    if (firstChange) {
      this.highlightedText = this.text;
    }

    if (textToHighlightIndex >= 0 && (!firstChange || this.textToHighlight)) {
      this.highlightedText = `
        <span>${this.text.slice(0, textToHighlightIndex)}</span>
          <span class="highlight-by-text">
              ${this.text.slice(textToHighlightIndex , textToHighlightIndex + this.textToHighlight.length)}
          </span>
        <span>${this.text.slice(textToHighlightIndex + this.textToHighlight.length)}<span>`;
    }
  }
}
