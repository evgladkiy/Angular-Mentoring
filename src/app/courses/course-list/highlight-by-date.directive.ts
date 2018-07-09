import { Directive, ElementRef, Input,  OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightByDate]'
})
export class HighlightByDateDirective implements OnInit {
  @Input('appHighlightByDate') creationDate: Date;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const courseElement: HTMLElement = this.el.nativeElement;

    const todayMs = Date.now();
    const creationDateMs = Number(this.creationDate);
    const differenceInMs: number = todayMs - creationDateMs;

    const daysForFreshCourse = 14;
    const freshCourseDuration: number = 1000 * 60 * 60 * 24 * daysForFreshCourse;

    if (differenceInMs < 0) { // upcoming course
      courseElement.style.borderColor = 'crimson';
    }

    if (differenceInMs > 0 && differenceInMs <= freshCourseDuration) { // fresh course
      courseElement.style.borderColor = '#238523';
    }
  }

}
