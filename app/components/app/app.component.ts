import { Component } from '@angular/core';
import {RequestService} from "../common/request.service";

@Component({
  selector: 'my-app',
  template: `
    <!--<h1>simple {{name}}</h1>-->
    
    <!--<button (click)="onCategorySearch()">Debug2</button>-->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {

  constructor(
      private requestService: RequestService
  ){}

  // onCategorySearch(){
  //   console.log('clicked');
  //   this.requestService.getCategories()
  //       .subscribe(data => {
  //         console.log('fetched data: ', data);
  //       })
  // }
}
