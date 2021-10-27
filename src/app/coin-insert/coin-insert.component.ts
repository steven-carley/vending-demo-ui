import { Component, OnInit } from '@angular/core';
import {VendingStompService} from "../vending-stomp.service";

@Component({
  selector: 'app-coin-insert',
  templateUrl: './coin-insert.component.html',
  styleUrls: ['./coin-insert.component.css']
})
export class CoinInsertComponent implements OnInit {

  constructor(private vendingService: VendingStompService) { }

  ngOnInit(): void {
  }

  onCoinInsert(weight: string, diameter: string): void {
    this.vendingService.publishMessage('/app/coin', {weight, diameter});
  }
}
