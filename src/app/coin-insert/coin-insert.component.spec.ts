import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinInsertComponent } from './coin-insert.component';
import {VendingStompService} from "../vending-stomp.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('CoinInsertComponent', () => {
  let component: CoinInsertComponent;
  let fixture: ComponentFixture<CoinInsertComponent>;
  const vendingStompServiceSpy = jasmine.createSpyObj('VendingStompService', ['publishMessage']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinInsertComponent ],
      providers: [{ provide: VendingStompService, useValue: vendingStompServiceSpy }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onCoinInsert should publish message', () => {
      component.onCoinInsert('.05', '0.005');
      expect(vendingStompServiceSpy.publishMessage).toHaveBeenCalledWith('/app/coin', {weight: '.05', diameter: '0.005'});
  });
});
