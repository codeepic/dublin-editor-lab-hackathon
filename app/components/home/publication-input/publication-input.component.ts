import {Component, ViewChild, OnChanges, SimpleChange, ElementRef, Input, Output, EventEmitter, trigger, state, style, transition, animate} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {BaseComponent} from "../../common/analytics-base.component";
import {QueryBuilderService} from "../query.builder.service";
import {Publication} from "../models/publication.model";

@Component({
    selector: 'publication-input',
    templateUrl: './app/components/home/publication-input/publication-input.component.html',
    animations: [
      trigger('publicationInput', [
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
})
export class PublicationInputComponent extends BaseComponent{
  @Output() moveNext: EventEmitter<null> = new EventEmitter<null>();
  publicationNameForm: FormGroup;
  publication: Publication;
  animationState: string = 'visible';

  constructor(
    private formBuilder: FormBuilder,
    private queryBuilderService: QueryBuilderService
  ){
    super();
  }

  ngOnInit(): void {
    this.publication = new Publication();
    this.buildForm();
  }

  buildForm(): void {
    this.publicationNameForm = this.formBuilder.group({
      'publicationName': [this.publication.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
        //forbiddenNameValidator(/bob/i)
      ]
      ]
    });

    //this may not be needed if you don't want to be showing error messages on every keystroke
    this.publicationNameForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    //this.publication.name =

    const form = this.publicationNameForm;

    for (const field in this.formErrors) {

      this.formErrors[field] = '';  // clear previous error message (if any)

      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'publicationName': ''
  };

  validationMessages = {
    'publicationName': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.'
    }
  };

  onSubmit(){
    this.publication = this.publicationNameForm.value.publicationName;
    console.log('this.publication: ', this.publication);
    this.queryBuilderService.storePublication(this.publication);

    this.moveToNextStep();
  }

  moveToNextStep(){
    this.animationState = 'hidden';

    setTimeout(() => {
      this.moveNext.emit(null);
    }, 600); //animate delay
  }
}
