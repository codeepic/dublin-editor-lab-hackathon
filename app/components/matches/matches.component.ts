import {Component} from '@angular/core';
import {MatchesService} from "./matches.service";
import {BaseComponent} from "../common/analytics-base.component";
import {Router} from "@angular/router";
import {QueryBuilderService} from "../home/query.builder.service";

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
        padding: 20px;
        min-height: 300px;
      }
    `]
})
export class MatchesComponent extends BaseComponent{
    matches: any[];

    constructor(
      private matchesService: MatchesService,
      private router: Router,
      private queryBuilderService: QueryBuilderService
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
      return new moment().format('LLLL');
    }

    onGetMatchDetails(teamNames: string[]){
      this.queryBuilderService.storeTeamNames(teamNames);
      this.router.navigate(['/match-details']);
    }
}
