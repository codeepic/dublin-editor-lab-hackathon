import {Component, ViewChild} from '@angular/core';
import {CompetitorsInputsComponent} from "./competitors-inputs/competitors-inputs.component";

@Component({
    selector: 'home',
    templateUrl: './app/components/home/home.component.html'
})
export class HomeComponent{
    @ViewChild(CompetitorsInputsComponent) competitorsInputsComponent: CompetitorsInputsComponent
    wel = 'see me ?';

    onMoveToCompetitors($event: any){
        //communicate with competutot

        this.competitorsInputsComponent.show()
    }
}