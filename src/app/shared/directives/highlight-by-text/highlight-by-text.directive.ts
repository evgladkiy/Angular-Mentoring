import { Directive, Input, OnInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightByText]'
})
export class HighlightByTextDirective implements  OnChanges {
  @Input('appHighlightByText') text: string;
  private color = '#b23a6b';
  private regexp = /(^<span>|<\/span>)$/gi;
  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    const nativeElement: HTMLElement = this.el.nativeElement;
    let nativeElementText: string = nativeElement.innerHTML;
    console.log(nativeElementText)
    nativeElementText.replace(this.regexp, '');
    nativeElementText.replace(/\r|\n/gi, '')

    console.log(nativeElementText)
    const textIndex: number = nativeElementText.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase());
    if (textIndex >= 1) {
      console.log(nativeElementText.slice(0, textIndex) + 'a')
      const newText = nativeElementText.slice(0, textIndex)
        + '<span>' + nativeElementText.slice(textIndex , textIndex + this.text.length)
        + '</span>'
        + nativeElementText.slice(textIndex + this.text.length);
        nativeElement.innerHTML = newText;
    }
  }
  // }(): void {
  //   const nativeElement: HTMLElement = this.el.nativeElement;
  //   const nativeElementText = nativeElement.innerHTML;
  //   console.log(nativeElement, nativeElementText)
    // const todayMs = Date.now();
    // const creationDateMs = Number(this.creationDate);
    // const differenceInMs: number = todayMs - creationDateMs;

    // const daysForFreshCourse = 14;
    // const freshCourseDuration: number = 1000 * 60 * 60 * 24 * daysForFreshCourse;

    // if (differenceInMs < 0) { // upcoming course
    //   nativeElement.style.borderColor = 'crimson';
    // }

    // if (differenceInMs >= 0 && differenceInMs <= freshCourseDuration) { // fresh course
    //   nativeElement.style.borderColor = 'rgb(35, 133, 35)';
    // }
  // }

}
