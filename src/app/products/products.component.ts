import { Component, OnInit } from '@angular/core';
import {VendingStompService} from "../vending-stomp.service";
import {Observable, of} from "rxjs";
import {ProductService} from "../product.service";
import {Product} from "../product.model";
import {catchError, tap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]> = of([]);

  constructor(private vendingService: VendingStompService,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts().pipe(
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error(`error occurred getting ${error.statusText}`);
    return of<Product[]>([]);
  }

  purchaseProduct(id: String): void {
    this.vendingService.publishMessage(`/app/purchase/${id}`, '');
  }
}
