import {Component, ViewChild, OnChanges, SimpleChange, ElementRef, Input, Output, EventEmitter, trigger, state, style, transition, animate} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {BaseComponent} from "../../common/analytics-base.component";
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
        transition('hidden <=> visible', animate('600ms ease-in'))
      ])
  ],
  styles: [`
        .competitors-inputs{
            width: 550px;
            margin: 0 auto;
            padding-top: 100px
        }
        
        .competitors-inputs input.form-control{
            width: 550px;
        }

        .competitors-inputs .plus-btn.btn{
            color: #fff !important;
            border-radius: 0;
            margin-left: 0;
            margin-top: 20px;
            display: block;
            height: 44px;
            width: 44px;
            border: 2px solid #5563d0;
            color: #5563d0;
            font-size: 20px;
            text-align: center; 
        }
    `]
})
export class CompetitorsInputsComponent extends BaseComponent{
  @Output() moveNext: EventEmitter<null> = new EventEmitter<null>();
  animationState: string = 'hidden';
  competitors: Publication[];

  constructor(
    private queryBuilderService: QueryBuilderService
  ){
    super();
  }

  ngOnInit(): void {
    this.competitors = Array.apply(null, Array(5)).map(() => new Publication());
    console.log('this.competitors: ', this.competitors);
    //this.panels = Array.apply(null, Array(4)).map(() => new Panel());
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
    // console.log('this competitors: ', this.competitors);
    // console.log('this.competitors.filter(c => c.name): ', this.competitors.filter(c => c.domain));
    this.queryBuilderService.storeCompetitors(this.competitors.filter(c => c.domain));

    this.moveToNextStep();
  }

  moveToNextStep(){
    this.animationState = 'hidden';

    setTimeout(() => {
      this.moveNext.emit(null);
    }, 600); //animate delay
  }

  show(){
    this.animationState = 'visible';
  }
}
