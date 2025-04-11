import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonInput,
  IonItem,
  IonSelect,
  IonLabel,
  IonNote,
  IonSelectOption,
  IonRadio,
  IonRadioGroup,
  IonCheckbox,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonList,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import {
  DAYS,
  GENDERS,
  GRADES,
  MONTHS,
  STEPS,
  TOPICS,
  YEARS,
} from 'src/app/shared/constants/lookup';
import { minArrayLengthValidator } from 'src/app/shared/utils/validators';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    IonButton,
    IonInput,
    IonItem,
    IonSelect,
    IonLabel,
    IonNote,
    IonSelectOption,
    NgIf,
    NgFor,
    IonRadio,
    IonList,
    IonRow,
    IonCol,
    IonCheckbox,
    IonRadioGroup,
    IonBreadcrumbs,
    IonBreadcrumb,
    RouterLink,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  readonly fb = inject(FormBuilder);

  readonly days = DAYS;
  readonly months = MONTHS;
  readonly years = YEARS;
  readonly grades = GRADES;
  readonly genders = GENDERS;
  readonly topics = TOPICS;
  readonly steps = STEPS;

  subscriptionForm!: FormGroup;

  constructor() {
    this._initForm();
  }

  onTopicChange(event) {
    const selectedTopicsArray = this.subscriptionForm.get(
      'selectedTopics'
    ) as FormArray;

    if (event.detail.checked) {
      selectedTopicsArray.push(this.fb.control(event.detail.value));
    } else {
      const index = selectedTopicsArray.controls.findIndex(
        (control) => control.value === event.detail.value
      );
      selectedTopicsArray.removeAt(index);
    }
  }

  ngOnInit() {}

  onSubmit() {
    if (this.subscriptionForm.valid) {
      console.log('Form submitted:', this.subscriptionForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  /**
   * Initialize the form group
   */
  private _initForm() {
    this.subscriptionForm = this.fb.group({
      yourName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      childFullName: ['', Validators.required],

      birthDay: ['', Validators.required],
      birthMonth: ['', Validators.required],
      birthYear: ['', Validators.required],

      grade: ['', Validators.required],
      gender: ['', Validators.required],

      selectedTopics: this.fb.array(
        [],
        [Validators.required, minArrayLengthValidator(3)]
      ), // FormArray for multiple selections
    });
  }
}
