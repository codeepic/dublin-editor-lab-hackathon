import {Component, ViewChild, OnChanges, SimpleChange, ElementRef, Input, Output, EventEmitter, trigger, state, style, transition, animate} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AnalyticsBaseComponent} from "../../common/analytics-base.component";
import {QueryBuilderService} from "../query.builder.service";
import {Publication} from "../models/publication.model";

@Component({
    selector: 'competitors-inputs',
    templateUrl: './app/components/home/competitors-inputs/competitors-inputs.component.html',
    animations: [
      trigger('competitorsInputs', [
        state('hidden', style({
          opacity: '0',
          display: 'none'
        })),
        state('visible', style({
          opacity: 1,
          display: 'block'
        })),
        transition('hidden <=> visible', animate('200ms ease-in'))
      ])
  ],
})
export class CompetitorsInputsComponent extends AnalyticsBaseComponent{
  @Output() moveNext: EventEmitter<null> = new EventEmitter<null>();
  animationState: string = 'hidden';
  competitors: Publication[]

  constructor(
    private queryBuilderService: QueryBuilderService
  ){
    super();
  }

  ngOnInit(): void {
    this.competitors = [new Publication()];
  }

  // buildForm(): void {
  //   this.competitorsNamesForm = this.formBuilder.group({
  //     'publicationName': [this.publicationName, [
  //       Validators.required,
  //       Validators.minLength(4),
  //       Validators.maxLength(24)
  //       //forbiddenNameValidator(/bob/i)
  //     ]
  //     ]
  //   });
  //
  //   //this may not be needed if you don't want to be showing error messages on every keystroke
  //   this.competitorsNamesForm.valueChanges
  //       .subscribe(data => this.onValueChanged(data));
  //
  //   this.onValueChanged(); // (re)set validation messages now
  // }
  //
  // onValueChanged(data?: any) {
  //
  //   const form = this.competitorsNamesForm;
  //
  //   for (const field in this.formErrors) {
  //
  //     this.formErrors[field] = '';  // clear previous error message (if any)
  //
  //     const control = form.get(field);
  //
  //     if (control && control.dirty && !control.valid) {
  //       const messages = this.validationMessages[field];
  //       for (const key in control.errors) {
  //         this.formErrors[field] += messages[key] + ' ';
  //       }
  //     }
  //   }
  // }
  //
  // formErrors = {
  //   'publicationName': ''
  // };
  //
  // validationMessages = {
  //   'panelName': {
  //     'required':      'Name is required.',
  //     'minlength':     'Name must be at least 4 characters long.',
  //     'maxlength':     'Name cannot be more than 24 characters long.'
  //   }
  // };

  onAddCompetitor(){
      this.competitors.push(new Publication());
  }

  onNext(){
    this.queryBuilderService.storeCompetitors(this.competitors);

    this.moveToNextStep();
  }

  moveToNextStep(){
    this.animationState = 'hidden';
    this.moveNext.emit(null);
  }

  show(){
    this.animationState = 'visible';
  }
}