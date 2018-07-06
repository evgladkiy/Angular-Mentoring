import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';

describe('ToolboxComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;
  let submitButtonDebugElement: DebugElement;
  const expectedSearchQuery = 'Angular';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ToolboxComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
    component.searchQuery = expectedSearchQuery;
    fixture.detectChanges();
  });

  it('toolbox should print correct search input value', () => {
    submitButtonDebugElement = fixture.debugElement.query(By.css('.btn_search-course'));
    submitButtonDebugElement.nativeElement.click();

    expect(component.printedValue).toBe(expectedSearchQuery);
  });
});
