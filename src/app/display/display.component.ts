import { Component, OnInit } from '@angular/core';
import {VendingStompService} from "../vending-stomp.service";
import {EMPTY, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private vendingService: VendingStompService) { }

  messages$: Observable<any> = EMPTY;

  ngOnInit(): void {
    this.messages$ = this.vendingService.subscribeToTopic('/topic/display').pipe(map(message => message.body));
  }

}
