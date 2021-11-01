import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import {VendingStompService} from "../vending-stomp.service";
import {of} from "rxjs";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  const vendingStompServiceSpy = jasmine.createSpyObj('VendingStompService', ['subscribeToTopic']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayComponent ],
      providers: [{ provide: VendingStompService, useValue: vendingStompServiceSpy }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    vendingStompServiceSpy.subscribeToTopic.and.returnValue(of({message: { body: 'test'}}));
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and subscribe', () => {
    expect(component).toBeTruthy();
    expect(vendingStompServiceSpy.subscribeToTopic).toHaveBeenCalledWith('/topic/display');
  });
});
