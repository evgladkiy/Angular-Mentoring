import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagItComponent } from './tag-it.component';

describe('TagItComponent', () => {
  let component: TagItComponent;
  let fixture: ComponentFixture<TagItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
