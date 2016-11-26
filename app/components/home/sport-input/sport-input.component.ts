import {Component, ViewChild, OnChanges, SimpleChange, ElementRef, Input, Output, EventEmitter, trigger, state, style, transition, animate} from '@angular/core';
import {ISportType} from "./models/sport-type.model";
import {BaseComponent} from "../../common/analytics-base.component";
import {QueryBuilderService} from "../query.builder.service";
import {Router} from "@angular/router";

@Component({
    selector: 'sport-input',
    templateUrl: './app/components/home/sport-input/sport-input.component.html',
    animations: [
        trigger('sportInputs', [
            state('hidden', style({
                opacity: '0',
                display: 'none'
            })),
            state('visible', style({
                opacity: 1,
                display: 'block'
            })),
            transition('hidden <=> visible', animate('600ms ease-in'))
        ])
    ],
    styles: [`
        .sport-input{
        
        }
    `]
})
export class SportInputComponent extends BaseComponent{
    animationState: string = 'hidden';

    constructor(
        private queryBuilderService: QueryBuilderService,
        private router: Router
    ){
        super();
    }

    sportTypes: ISportType[] = [
        {
            name: 'Football - World Cup Qualifiers',
            active: false
        },
        {
            name: 'Football - Champions League',
            active: false
        },
        {
            name: 'Football - Premier League',
            active: false
        },
        {
            name: 'Rugby - Pro 12',
            active: false
        },
        {
            name: 'Rugby - Internationals',
            active: false
        },
        {
            name: 'Rugby - English Premiership',
            active: false
        }
    ];

    onToggle(i: number){
        this.sportTypes[i].active = !this.sportTypes[i].active;
        console.log('chnged to ', this.sportTypes[i].active);
    }

    show(){
        this.animationState = 'visible';
    }

    onNext(){
        const sportTypes: string[] = this.sportTypes.filter(sp => sp.active).map(sp => sp.name);

        this.queryBuilderService.storeSportType(sportTypes)
        this.animationState = 'hidden';

        //this.router.navigate(['/domain-benchmark/' + dashboardId]);
        this.router.navigate(['/matches'])
    }
}

