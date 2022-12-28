import { ComponentFixture, TestBed } from '@angular/core/testing';

import VerificationForm2Component from './verification-form2.component';

describe('ModalComponent', () => {
  let component: VerificationForm2Component;
  let fixture: ComponentFixture<VerificationForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
