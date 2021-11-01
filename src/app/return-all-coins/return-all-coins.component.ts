import { Component, OnInit } from '@angular/core';
import {VendingStompService} from "../vending-stomp.service";

@Component({
  selector: 'app-return-all-coins',
  templateUrl: './return-all-coins.component.html',
  styleUrls: ['./return-all-coins.component.css']
})
export class ReturnAllCoinsComponent implements OnInit {

  constructor(private vendingService: VendingStompService) { }

  ngOnInit(): void {
  }

  returnAllCoins(): void {
    this.vendingService.publishMessage('/app/returncoins', '');
  }

}
