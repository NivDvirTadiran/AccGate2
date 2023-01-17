import { ComponentFixture, TestBed } from '@angular/core/testing';

import MyAccountForm2Component from './my-account-form2.component';

describe('ModalComponent', () => {
  let component: MyAccountForm2Component;
  let fixture: ComponentFixture<MyAccountForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
