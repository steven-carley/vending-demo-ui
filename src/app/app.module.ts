import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StompRService } from "@stomp/ng2-stompjs";
import { MessagesComponent } from './messages/messages.component';
import { DisplayComponent } from './display/display.component';
import { CoinInsertComponent } from './coin-insert/coin-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DisplayComponent,
    CoinInsertComponent
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
