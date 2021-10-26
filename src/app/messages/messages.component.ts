import { Component, OnDestroy, OnInit } from '@angular/core';
import {StompRService} from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {
  public receivedMessages: string[] = [];
  private topicSubscription = new Subscription();

  constructor(private stompService: StompRService) { }

  ngOnInit() {
    this.stompService.config = {
      url: 'ws://localhost:8080/vending-machine',
      headers: {},
      heartbeat_in: 0, // Typical value 0 - disabled
      heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
      reconnect_delay: 250,  // Typical value is 5000, 0 disables.
      debug: true
    }

    this.stompService.initAndConnect();

    this.topicSubscription.add(this.stompService.subscribe('/topic/display').subscribe((message: Message) => {
      this.receivedMessages.push(message.body);
    }));
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const message = `Message generated at ${new Date}`;
    this.stompService.publish('/app/insert-coin', JSON.stringify({from: 'test', text: message}));
  }
}
