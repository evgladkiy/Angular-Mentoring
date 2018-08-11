import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  let breadcrumbsDebugElement: DebugElement;
  const path = ['home', 'new'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ BreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
  });

  it('should create correct number of breadcrumbs', () => {
    component.crumbs = path;
    fixture.detectChanges();
    breadcrumbsDebugElement = fixture.debugElement.query(By.css('.breadcrumbs-navigation'));
    const navElement: HTMLElement = breadcrumbsDebugElement.nativeElement;

    expect(navElement.children.length).toBe(path.length);
    expect(navElement.children[0].textContent.trim()).toBe(path[0]);
  });
});
