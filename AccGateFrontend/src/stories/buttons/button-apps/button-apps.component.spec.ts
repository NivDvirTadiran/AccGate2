import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAppsComponent } from './button-apps.component';

describe('ButtonAppsComponent', () => {
  let component: ButtonAppsComponent;
  let fixture: ComponentFixture<ButtonAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
