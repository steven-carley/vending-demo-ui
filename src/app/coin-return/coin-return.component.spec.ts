import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinReturnComponent } from './coin-return.component';

describe('CoinReturnComponent', () => {
  let component: CoinReturnComponent;
  let fixture: ComponentFixture<CoinReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
