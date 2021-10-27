import {Component, OnDestroy, OnInit} from '@angular/core';
import {VendingStompService} from "../vending-stomp.service";
import {map} from "rxjs/operators";
import {Coin} from "../coin.model";
import {BehaviorSubject, Observable, of, Subscription} from "rxjs";

@Component({
  selector: 'app-coin-return',
  templateUrl: './coin-return.component.html',
  styleUrls: ['./coin-return.component.css']
})
export class CoinReturnComponent implements OnInit, OnDestroy {

  coins: BehaviorSubject<Coin[]> = new BehaviorSubject<Coin[]>([]);
  subscription = new Subscription();

  constructor(private vendingService: VendingStompService) { }

  clearCoins(): void {
    this.coins = new BehaviorSubject<Coin[]>([]);
  }

  ngOnInit(): void {
      this.subscription.add(this.vendingService
        .subscribeToTopic('/topic/return')
        .pipe(map(message => message.body))
        .subscribe(value => {
          this.coins.next(this.coins.getValue().concat([new Coin(JSON.parse(value))]));
        })
      );
  }

  ngOnDestroy() : void{
    this.subscription.unsubscribe();
  }
}
