import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HeaderLogoComponent } from './header-logo.component';

describe('HeaderLogoComponent', () => {
  let component: HeaderLogoComponent;
  let fixture: ComponentFixture<HeaderLogoComponent>;
  const expectedLogoText = 'AwesomeLogo';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('header logo link should have correct text', () => {
    const debugElement: DebugElement = fixture.debugElement.query(By.css('a'));

    expect(debugElement.nativeElement.textContent).toBe(expectedLogoText);
  });
});
