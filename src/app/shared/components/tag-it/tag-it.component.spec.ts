import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagItComponent } from './tag-it.component';
import { FormsModule } from '../../../../../node_modules/@angular/forms';

describe('TagItComponent', () => {
  let component: TagItComponent;
  let fixture: ComponentFixture<TagItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TagItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   fixture.detectChanges();
  //   expect(component).toBeDefined();
  // });
});
