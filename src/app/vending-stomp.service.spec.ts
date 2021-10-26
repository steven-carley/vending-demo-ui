import { TestBed } from '@angular/core/testing';

import { VendingStompService } from './vending-stomp.service';

describe('VendingStompService', () => {
  let service: VendingStompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendingStompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
