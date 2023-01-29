import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdmin2Component } from './board-admin2.component';

describe('BoardAdminComponent', () => {
  let component: BoardAdmin2Component;
  let fixture: ComponentFixture<BoardAdmin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdmin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
