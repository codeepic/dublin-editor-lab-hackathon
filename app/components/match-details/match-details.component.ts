import {Component} from '@angular/core';
import {BaseComponent} from "../common/analytics-base.component";
import {RequestService} from "../common/request.service";
import {count} from "rxjs/operator/count";
import {QueryBuilderService} from "../home/query.builder.service";

declare var moment: any;

@Component({
  selector: 'match-details',
  templateUrl: './app/components/match-details/match-details.component.html',
    styles: [`
        .treemap{
            width: 60%;
            float: left;
            background: #f0f1ff;
        }
        
        .articles{
            width: 40%;
            float: right;
        }
    `]
})

export class MatchDetailsComponent extends BaseComponent{
    articlesData: any;
    topStatsData: any;
    headline: string;

    constructor(
      private requestService: RequestService,
      private queryBuilderService: QueryBuilderService
    ){
      super();
    }

    ngOnInit(){
      this.getMatchDetails();
      // this.getMatchTopStats();

      this.buildHeadline();
    }

    buildHeadline(){
        const teamNames = this.queryBuilderService.getQueryObj().teamNames;
        this.headline = teamNames[0] + ' vs ' + teamNames[1];
    }

    getMatchDetails(){
      this.requestService.getMatchRelatedArticles()
        .subscribe(data => {
          this.articlesData = data;
          console.log('%c match details data: ', 'background: pink;', data);
        })
    }
  //
  // getMatchTopStats(){
  //   this.requestService.getMatchTopStats()
  //     .subscribe(data => {
  //       this.topStatsData = data;
  //       console.log('%c match TOP STATS: ', 'background: orange', data);
  //     })
  // }

    prettyTime(unix: number): string{
        return new moment(unix).format('LLLL');
    }

    getTotalEngagement(a: any){
      return a.fb_data.total_engagement_count
          + a.li_data.li_count
          + a.tw_data.tw_count;
    }
}