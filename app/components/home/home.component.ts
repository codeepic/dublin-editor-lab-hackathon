import {Component, ViewChild} from '@angular/core';
import {CompetitorsInputsComponent} from "./competitors-inputs/competitors-inputs.component";
import {SportInputComponent} from "./sport-input/sport-input.component";

@Component({
    selector: 'home',
    templateUrl: './app/components/home/home.component.html'
})
export class HomeComponent{
    @ViewChild(CompetitorsInputsComponent) competitorsInputsComponent: CompetitorsInputsComponent;
    @ViewChild(SportInputComponent) sportInputComponent: SportInputComponent;

    onMoveToCompetitors($event: any){
        this.competitorsInputsComponent.show()
    }

    onMoveToSportsTypes($event: any){
        this.sportInputComponent.show();
    }////
}