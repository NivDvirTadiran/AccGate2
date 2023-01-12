import { ComponentFixture, TestBed } from '@angular/core/testing';

import ForgotPassForm2Component from './forgot-pass-form2.component';

describe('ModalComponent', () => {
  let component: ForgotPassForm2Component;
  let fixture: ComponentFixture<ForgotPassForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
