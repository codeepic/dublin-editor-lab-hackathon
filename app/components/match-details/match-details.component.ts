import {Component} from '@angular/core';
import {BaseComponent} from "../common/analytics-base.component";
import {RequestService} from "../common/request.service";
import {count} from "rxjs/operator/count";

declare var moment: any;

@Component({
  selector: 'match-details',
  templateUrl: './app/components/match-details/match-details.component.html',
})

export class MatchDetailsComponent extends BaseComponent{
    articlesData: any;
    topStatsData: any;

    constructor(
      private requestService: RequestService
    ){
      super();
    }

    ngOnInit(){
      this.getMatchDetails();
      this.getMatchTopStats();
    }

    getMatchDetails(){
      this.requestService.getMatchRelatedArticles()
        .subscribe(data => {
          this.articlesData = data;
          console.log('%c match detals data: ', 'border: 1px solid green', data);
        })
    }

  getMatchTopStats(){
    this.requestService.getMatchTopStats()
      .subscribe(data => {
        this.topStatsData = data;
        console.log('%c match TOP STATS: ', 'background: orange', data);
      })
  }

    prettyTime(unix: number): string{
        return new moment(unix).format('LLLL');
    }

    getTotalEngagement(a: any){
      return a.fb_data.total_engagement_count
          + a.li_data.li_count
          + a.tw_data.tw_count;
    }
}