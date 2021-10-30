import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetInventoryComponent } from './reset-inventory.component';

describe('ResetInventoryComponent', () => {
  let component: ResetInventoryComponent;
  let fixture: ComponentFixture<ResetInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetInventoryComponent ]
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
});
