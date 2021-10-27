import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAllCoinsComponent } from './return-all-coins.component';

describe('ReturnAllCoinsComponent', () => {
  let component: ReturnAllCoinsComponent;
  let fixture: ComponentFixture<ReturnAllCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnAllCoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnAllCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
