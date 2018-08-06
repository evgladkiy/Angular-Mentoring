import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


import { UserPanelComponent } from './user-panel.component';

describe('UserPanelComponent', () => {
  let fixture: ComponentFixture<UserPanelComponent>;
  const user = {
    _id: '12',
    login: 'Vasia',
    password: 'Pupkin',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelComponent);
    fixture.detectChanges();
  });

  it('user panel should have correct initial user', () => {
    const debugElement: DebugElement = fixture.debugElement.query(By.css('.user-panel__user'));
    const { login, password } = user;

    expect(debugElement.nativeElement.textContent).toBe(`${login} ${password}`);
  });
});
