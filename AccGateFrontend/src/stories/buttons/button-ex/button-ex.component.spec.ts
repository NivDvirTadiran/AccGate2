import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExComponent } from './button-ex.component';

describe('LanguageIconComponent', () => {
  let component: ButtonExComponent;
  let fixture: ComponentFixture<ButtonExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
