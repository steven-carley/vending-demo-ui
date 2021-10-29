import { Component, OnInit } from '@angular/core';
import {VendingStompService} from "../vending-stomp.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private vendingService: VendingStompService) { }

  ngOnInit(): void {
  }

  purchaseProduct(id: String): void {
    this.vendingService.publishMessage(`/app/purchase/${id}`, '');
  }
}
