import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from "./routes";
import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {RequestService} from "../common/request.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HomeComponent} from "../home/home.component";
import {PublicationInputComponent} from "../home/publication-input/publication-input.component";
import {QueryBuilderService} from "../home/query.builder.service";
import {CompetitorsInputsComponent} from "../home/competitors-inputs/competitors-inputs.component";
import {SportInputComponent} from "../home/sport-input/sport-input.component";
import {MatchesComponent} from "../matches/matches.component";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    RequestService,
    QueryBuilderService
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PublicationInputComponent,
    CompetitorsInputsComponent,
    SportInputComponent,
    MatchesComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
