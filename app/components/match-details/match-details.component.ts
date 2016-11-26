import {Component} from '@angular/core';
import {BaseComponent} from "../common/analytics-base.component";
import {RequestService} from "../common/request.service";

@Component({
  selector: 'match-details',
  templateUrl: './app/components/match-details/match-details.component.html',
})

export class MatchDetailsComponent extends BaseComponent{
    constructor(
      private requestService: RequestService
    ){
      super();
    }

    ngOnInit(){
      this.getMatchDetails();
    }

    getMatchDetails(){
      this.requestService.getMatchDetails()
        .subscribe(data => {
          console.log('%c match detals data: ', 'border: 1px solid green', data);
        })
    }
}