import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDroplistComponent } from './form-droplist.component';

describe('FormDroplistComponent', () => {
  let component: FormDroplistComponent;
  let fixture: ComponentFixture<FormDroplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDroplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDroplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
