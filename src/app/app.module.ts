import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StompRService } from "@stomp/ng2-stompjs";
import { MessagesComponent } from './messages/messages.component';
import { DisplayComponent } from './display/display.component';
import { CoinInsertComponent } from './coin-insert/coin-insert.component';
import { CoinReturnComponent } from './coin-return/coin-return.component';
import { ReturnAllCoinsComponent } from './return-all-coins/return-all-coins.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DisplayComponent,
    CoinInsertComponent,
    CoinReturnComponent,
    ReturnAllCoinsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StompRService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
