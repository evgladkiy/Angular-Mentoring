import { Directive, ElementRef, Input,  OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightByDate]'
})
export class HighlightByDateDirective {
  @Input('creationDate') appHighlightByDate: Date;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    console.log( this.el.nativeElement)
  }

}
