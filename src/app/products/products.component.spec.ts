import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import {VendingStompService} from "../vending-stomp.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {of} from "rxjs";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  const vendingStompServiceSpy = jasmine.createSpyObj('VendingStompService', ['subscribeToTopic', 'publishMessage']);
  const messageBody = JSON.stringify({id: '1', description: 'Desc', price: 0.5});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [{ provide: VendingStompService, useValue: vendingStompServiceSpy }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    vendingStompServiceSpy.subscribeToTopic.and.returnValue(of({message: { body: messageBody}}));
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and subscribe', () => {
    expect(component).toBeTruthy();
    expect(vendingStompServiceSpy.subscribeToTopic).toHaveBeenCalledWith('/topic/product');
  });

  it('purchaseProduct should publish message', () => {
    expect(component).toBeTruthy();
    component.purchaseProduct('2');
    expect(vendingStompServiceSpy.publishMessage).toHaveBeenCalledWith('/app/purchase/2', '');
  });
});
