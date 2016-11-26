import {Component} from '@angular/core';
import {MatchesService} from "./matches.service";
import {BaseComponent} from "../common/analytics-base.component";

declare var moment: any;

@Component({
    selector: 'matches',
    templateUrl: './app/components/matches/matches.component.html',
    styles: [`
      .matches{
        border: 1px solid red;
      }

      .matches li{
        display: inline-block;
        width: 33%;
        border: 1px solid black;
      }
    `]
})
export class MatchesComponent extends BaseComponent{
    matches: any[];

    constructor(
      private matchesService: MatchesService
    ){
      super();
    }

    ngOnInit(){
        this.getMatches();
    }

    getMatches(){
      this.matchesService.getMatches()
        .subscribe(data => {
          console.log('gotmatchesdata: ', data);

          this.matches = data;
        });
    }

    prettyTime(unix: number): string{
      return new Date(unix).toString();
    }
}
