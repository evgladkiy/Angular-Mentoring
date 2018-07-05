import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';

describe('ToolboxComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;
  let searchInputDebugElement: DebugElement;
  let submitButtonDebugElement: DebugElement;
  const expextedSearchQuery = 'Angular';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
    searchInputDebugElement = fixture.debugElement.query(By.css('.form-input_search'));
    submitButtonDebugElement = fixture.debugElement.query(By.css('.btn_search-course'));
    fixture.detectChanges();
  });

  it('toolbox should print correct search input value', () => {
    searchInputDebugElement.nativeElement.value = expextedSearchQuery;
    submitButtonDebugElement.nativeElement.click();
    component.onSearhBtnClick();
    fixture.detectChanges();

    expect('Angular').toBe(expextedSearchQuery);
  });
});
