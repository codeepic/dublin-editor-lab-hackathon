import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from "./routes";
import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {RequestService} from "../common/request.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HomeComponent} from "../home/home.component";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RequestService],
  declarations: [
      AppComponent,
      HomeComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
