import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

interface Data {
  text: string;
  name: string;
}

@Directive({
  selector: '[appHighlightByText]'
})
export class HighlightByTextDirective implements  OnChanges {
  @Input('appHighlightByText') data: Data;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { text, name } = this.data;
    const nativeElement: HTMLElement = this.el.nativeElement;
    const { firstChange } = changes.data;
    const textIndex: number = name.toLowerCase().indexOf(text);

    if (textIndex >= 0 && (!firstChange || text)) {
        const newText = `
          <span>${name.slice(0, textIndex)}</span>
            <span class="highlight-by-text">${name.slice(textIndex , textIndex + text.length)}</span>
          <span>${name.slice(textIndex + text.length)}<span>`;
      nativeElement.innerHTML = newText;
    }
  }
}
