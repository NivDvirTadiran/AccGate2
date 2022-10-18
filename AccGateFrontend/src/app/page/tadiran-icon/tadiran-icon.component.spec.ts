import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadiranIconComponent } from './tadiran-icon.component';

describe('LanguageIconComponent', () => {
  let component: TadiranIconComponent;
  let fixture: ComponentFixture<TadiranIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TadiranIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TadiranIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
