import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAllCoinsComponent } from './return-all-coins.component';
import {VendingStompService} from "../vending-stomp.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ReturnAllCoinsComponent', () => {
  let component: ReturnAllCoinsComponent;
  let fixture: ComponentFixture<ReturnAllCoinsComponent>;
  const vendingStompServiceSpy = jasmine.createSpyObj('VendingStompService', ['publishMessage']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnAllCoinsComponent ],
      providers: [{ provide: VendingStompService, useValue: vendingStompServiceSpy }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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

  it('returnAllCoins should publish message', () => {
    component.returnAllCoins();
    expect(vendingStompServiceSpy.publishMessage).toHaveBeenCalledWith('/app/returncoins', '');
  });
});
