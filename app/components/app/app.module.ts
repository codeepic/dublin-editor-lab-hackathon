import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {RequestService} from "../common/request.service";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  providers: [RequestService],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
