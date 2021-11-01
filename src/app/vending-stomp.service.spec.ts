import { TestBed } from '@angular/core/testing';

import { VendingStompService } from './vending-stomp.service';
import {StompRService} from "@stomp/ng2-stompjs";

describe('VendingStompService', () => {
  let service: VendingStompService;
  const stompRServiceSpy = jasmine.createSpyObj('StompRService', ['initAndConnect', 'subscribe', 'publish']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: StompRService, useValue: stompRServiceSpy }]
    });
    service = TestBed.inject(VendingStompService);
  });

  it('should be created and connect', () => {
    expect(service).toBeTruthy();
    expect(stompRServiceSpy.initAndConnect).toHaveBeenCalled();
  });

  it('subscribeToTopic should subscribe', () => {
    expect(service).toBeTruthy();
    service.subscribeToTopic('/test/topic');
    expect(stompRServiceSpy.subscribe).toHaveBeenCalledWith('/test/topic');
  });

  it('publishMessage should publish', () => {
    expect(service).toBeTruthy();
    service.publishMessage('/app/queue', {test:'message'});
    expect(stompRServiceSpy.publish).toHaveBeenCalledWith('/app/queue', '{"test":"message"}');
  });
});
