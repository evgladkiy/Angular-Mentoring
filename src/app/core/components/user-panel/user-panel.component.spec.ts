import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';


import { UserPanelComponent } from './user-panel.component';

describe('UserPanelComponent', () => {
  let fixture: ComponentFixture<UserPanelComponent>;
  let component: UserPanelComponent;
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
  });

  it('user panel should have correct initial user', () => {
    component = fixture.componentInstance;
    component.user = of(user);
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement.query(By.css('.user-panel__user'));
    const { login, password } = user;

    expect(debugElement.nativeElement.textContent).toBe(`${login}`);
  });
});
