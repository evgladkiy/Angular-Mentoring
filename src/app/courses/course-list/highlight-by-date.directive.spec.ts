import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HighlightByDateDirective } from './highlight-by-date.directive';


@Component({
  template: `
    <div [appHighlightByDate]="date">test Component </div>`
})
class TestComponent {
  date = new Date();
}

describe('HighlightByDateDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testEl: DebugElement;
  const freshItemColor = 'rgb(35, 133, 35)';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, HighlightByDateDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    testEl = fixture.debugElement.query(By.directive(HighlightByDateDirective));
  });

  it('HighlightByDateDirective should correct Highlight fresh item', () => {
    expect(testEl.nativeElement.style.borderColor).toBe(freshItemColor);
  });

});
