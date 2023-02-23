import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditSaveComponent } from './button-edit-save.component';

describe('ButtonEditSaveComponent', () => {
  let component: ButtonEditSaveComponent;
  let fixture: ComponentFixture<ButtonEditSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEditSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEditSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
