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
        padding: 30px;
      }
      
      h1{
        font-size: 24px;
        height: 73px;
        float: left;
        width: 300px;
        padding-top: 25px;
        padding-left: 20px;
      }
      
      .dash-mock{
        background: url('assets/img/dash-mock.png') 0 0 no-repeat;
        display: block;
        float: right;
        width: 447px;
        height: 55px;
        margin-top: 13px;
        margin-right: 4px;
      }
        
      ul{
        padding: 20px;
      }  
        
      li {
        display: inline-block;
        width: 25%;
        margin-right: 30px;
        margin-bottom: 30px;
        border: 1px solid #d4d6f0;
        box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.13);
        padding: 20px;
        min-height: 300px;
      }
      
      li h3,
      li p{
        text-align: center;
      }
      
      li span{
          display: block;
          font-size: 14px;
          margin-bottom: 60px;
      }
      
      .box li h3{
        font-size: 21px;
      }
      
      .box li p{
        font-size: 24px;
        color: #c6c9f5;
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
      return new moment(unix).format('LLLL');
    }

    onGetMatchDetails(teamNames: string[]){
      this.queryBuilderService.storeTeamNames(teamNames);
      this.router.navigate(['/match-details']);
    }
}
