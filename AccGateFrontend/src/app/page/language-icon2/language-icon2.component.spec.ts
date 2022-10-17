import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageIcon2Component } from './language-icon2.component';

describe('LanguageIconComponent', () => {
  let component: LanguageIcon2Component;
  let fixture: ComponentFixture<LanguageIcon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageIcon2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageIcon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
