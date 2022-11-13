import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogtestComponent } from './logtest.component';

describe('LogtestComponent', () => {
  let component: LogtestComponent;
  let fixture: ComponentFixture<LogtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
