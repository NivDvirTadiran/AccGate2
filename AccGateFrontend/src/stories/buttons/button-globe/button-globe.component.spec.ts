import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGlobeComponent } from './button-globe.component';

describe('LanguageIconComponent', () => {
  let component: ButtonGlobeComponent;
  let fixture: ComponentFixture<ButtonGlobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGlobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGlobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
