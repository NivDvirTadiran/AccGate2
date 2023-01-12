import { ComponentFixture, TestBed } from '@angular/core/testing';

import ResetPassForm2Component from './reset-pass-form2.component';

describe('ModalComponent', () => {
  let component: ResetPassForm2Component;
  let fixture: ComponentFixture<ResetPassForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPassForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
