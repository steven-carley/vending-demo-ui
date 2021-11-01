import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinReturnComponent } from './coin-return.component';
import {VendingStompService} from "../vending-stomp.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {of} from "rxjs";

describe('CoinReturnComponent', () => {
  let component: CoinReturnComponent;
  let fixture: ComponentFixture<CoinReturnComponent>;
  const vendingStompServiceSpy = jasmine.createSpyObj('VendingStompService', ['subscribeToTopic']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinReturnComponent ],
      providers: [{ provide: VendingStompService, useValue: vendingStompServiceSpy }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    vendingStompServiceSpy.subscribeToTopic.and.returnValue(of({message: { body: 'test'}}));
    fixture = TestBed.createComponent(CoinReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and subscribe', () => {
    expect(component).toBeTruthy();
    expect(vendingStompServiceSpy.subscribeToTopic).toHaveBeenCalledWith('/topic/return');
  });
});
