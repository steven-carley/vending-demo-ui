import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetInventoryComponent } from './reset-inventory.component';
import {VendingStompService} from "../vending-stomp.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ResetInventoryComponent', () => {
  let component: ResetInventoryComponent;
  let fixture: ComponentFixture<ResetInventoryComponent>;
  const vendingStompServiceSpy = jasmine.createSpyObj('VendingStompService', ['publishMessage']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetInventoryComponent ],
      providers: [{ provide: VendingStompService, useValue: vendingStompServiceSpy }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resetInventory should publish message', () => {
    component.resetInventory();
    expect(vendingStompServiceSpy.publishMessage).toHaveBeenCalledWith('/app/resetInventory', '');
  });
});
