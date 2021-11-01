import {Component, OnInit} from '@angular/core';
import {VendingStompService} from "../vending-stomp.service";
import {Observable, of} from "rxjs";
import {Product} from "../product.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]> = of([]);

  constructor(private vendingService: VendingStompService) { }


  ngOnInit(): void {
    this.products$ = this.vendingService.subscribeToTopic('/topic/product').pipe(map(message => this.parseProducts(message.body)));
  }

  private parseProducts(jsonString: string): Product[] {
    return JSON.parse(jsonString);
  }

  purchaseProduct(id: String): void {
    this.vendingService.publishMessage(`/app/purchase/${id}`, '');
  }
}
