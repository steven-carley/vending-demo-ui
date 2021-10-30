import { Component, OnInit } from '@angular/core';
import {VendingStompService} from "../vending-stomp.service";

@Component({
  selector: 'app-reset-inventory',
  templateUrl: './reset-inventory.component.html',
  styleUrls: ['./reset-inventory.component.css']
})
export class ResetInventoryComponent implements OnInit {

  constructor(private vendingService: VendingStompService) {
  }

  ngOnInit(): void {
  }

  resetInventory(): void {
    this.vendingService.publishMessage('/app/resetInventory', '');
  }
}
