import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  let breadcrumbsDebugElement: DebugElement;
  const path = ['page', '123213'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    breadcrumbsDebugElement = fixture.debugElement.query(By.css('.breadcrumbs-navigation'));
    component.path = path;
    fixture.detectChanges();
  });

  it('should create correct number of breadcrumbs', () => {
    const navElement: HTMLElement = breadcrumbsDebugElement.nativeElement;

    expect(navElement.children.length).toBe(path.length);
    expect(navElement.children[0].textContent).toBe(path[0]);
  });
});
