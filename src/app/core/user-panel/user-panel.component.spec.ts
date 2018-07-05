import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { User } from './user.model';

import { UserPanelComponent } from './user-panel.component';

describe('UserPanelComponent', () => {
  let component: UserPanelComponent;
  let fixture: ComponentFixture<UserPanelComponent>;
  const user: User = {
    id: 12,
    firstName: 'Vasia',
    lastName: 'Pupkin',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('user panek shoudd have correct initial user', () => {
    const debugElement: DebugElement = fixture.debugElement.query(By.css('.user-panel__user'));
    const { firstName, lastName } = user;

    expect(debugElement.nativeElement.textContent).toBe(`${firstName} ${lastName}`);
  });
});
