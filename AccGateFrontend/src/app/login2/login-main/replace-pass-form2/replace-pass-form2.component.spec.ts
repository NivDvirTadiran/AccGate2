import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacePassForm2Component } from './replace-pass-form2.component';

describe('ModalComponent', () => {
  let component: ReplacePassForm2Component;
  let fixture: ComponentFixture<ReplacePassForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplacePassForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacePassForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
