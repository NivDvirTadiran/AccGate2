import { ComponentFixture, TestBed } from '@angular/core/testing';

import RegisterForm2Component from './register-form2.component';

describe('ModalComponent', () => {
  let component: RegisterForm2Component;
  let fixture: ComponentFixture<RegisterForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
