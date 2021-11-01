import {Injectable} from '@angular/core';
import {StompRService} from "@stomp/ng2-stompjs";
import {Observable} from "rxjs";
import {Message} from "@stomp/stompjs";

@Injectable({
  providedIn: 'root'
})
export class VendingStompService {

  constructor(private stompService: StompRService) {
    this.stompService.config = {
      url: 'ws://localhost:8080/vending-machine',
      headers: {},
      heartbeat_in: 0, // Typical value 0 - disabled
      heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
      reconnect_delay: 250,  // Typical value is 5000, 0 disables.
      debug: true
    }

    this.stompService.initAndConnect();
  }

  public subscribeToTopic(topic: string): Observable<Message> {
    return this.stompService.subscribe(topic);
  }

  public publishMessage(queueName: string, message: any): void {
    this.stompService.publish(queueName, JSON.stringify(message));
  }
}
