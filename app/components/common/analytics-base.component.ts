import { OnDestroy, OnInit, DoCheck} from '@angular/core';
import {Subscription} from "rxjs";

export abstract class AnalyticsBaseComponent implements OnDestroy, OnInit{ //DoCheck
  subscriptions: Subscription[] = [];

  addSubscription(sub: Subscription){
    this.subscriptions.push(sub);
  }

  getSubscriptions(): any[] {
    return this.subscriptions;
  }

  unsubscribeAll(){
    this.subscriptions.forEach(sub => this.removeSubscription(sub));
  }

  removeSubscription(sub: Subscription){
    sub.unsubscribe();
  }

  ngOnDestroy(){
    this.unsubscribeAll();
  }

  ngOnInit(){}

  // ngDoCheck(){ //uncomment this one to see how many change detections are triggered
  //     console.log('change detection triggered from ', this.constructor['name']);
  // }
}