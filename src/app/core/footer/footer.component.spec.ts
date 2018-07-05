import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Footer should contain text "@Copyright" with current year', () => {
    const pDebugElement: DebugElement = fixture.debugElement.query(By.css('p'));
    const currentYear = (new Date()).getFullYear();

    expect(pDebugElement.nativeElement.textContent).toContain(`@Copyright ${component.currentYear}`);
  });
});
