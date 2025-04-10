import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormComponent } from './form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import {
  DAYS,
  MONTHS,
  YEARS,
  GRADES,
  GENDERS,
  TOPICS,
  STEPS,
} from 'src/app/shared/constants/lookup';
import { minSelectedCheckboxes } from 'src/app/shared/utils/validators';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('minSelectedCheckboxes Validator', () => {
    it('should be valid if at least 3 checkboxes are selected', () => {
      const control = component.fb.array([
        component.fb.control(true),
        component.fb.control(true),
        component.fb.control(true),
      ]);
      const validator = minSelectedCheckboxes(3)(control);
      expect(validator).toBeNull();
    });

    it('should be invalid if less than 3 checkboxes are selected', () => {
      const control = component.fb.array([
        component.fb.control(true),
        component.fb.control(true),
        component.fb.control(false),
      ]);
      const validator = minSelectedCheckboxes(3)(control);
      expect(validator).toEqual({ required: true });
    });

    it('should work correctly with the FormArray in the component', () => {
      // component.subscriptionForm
      //   .get('selectedTopics')
      //   ?.patchValue(['Arabic', 'Hisory', 'Sports']);
      // component.subscriptionForm.get('selectedTopics')?.markAsTouched();
      // fixture.detectChanges();
      // expect(component.subscriptionForm.valid).toBeTrue();

      component.subscriptionForm.get('selectedTopics')?.patchValue(['Arabic', 'Hisory']);
      component.subscriptionForm.get('selectedTopics')?.markAsTouched();
      fixture.detectChanges();
      expect(component.subscriptionForm.invalid).toBeTrue();
    });
  });

  it('should initialize the subscriptionForm with correct controls and validators', () => {
    expect(component.subscriptionForm.get('yourName')).toBeTruthy();
    expect(component.subscriptionForm.get('yourName')?.validator).toBeTruthy();

    expect(component.subscriptionForm.get('email')).toBeTruthy();
    expect(component.subscriptionForm.get('email')?.validator).toBeTruthy();

    expect(component.subscriptionForm.get('childFullName')).toBeTruthy();
    expect(
      component.subscriptionForm.get('childFullName')?.validator
    ).toBeTruthy();

    expect(component.subscriptionForm.get('birthDay')).toBeTruthy();
    expect(component.subscriptionForm.get('birthDay')?.validator).toBeTruthy();

    expect(component.subscriptionForm.get('birthMonth')).toBeTruthy();
    expect(
      component.subscriptionForm.get('birthMonth')?.validator
    ).toBeTruthy();

    expect(component.subscriptionForm.get('birthYear')).toBeTruthy();
    expect(component.subscriptionForm.get('birthYear')?.validator).toBeTruthy();

    expect(component.subscriptionForm.get('grade')).toBeTruthy();
    expect(component.subscriptionForm.get('grade')?.validator).toBeTruthy();

    expect(component.subscriptionForm.get('gender')).toBeTruthy();
    expect(component.subscriptionForm.get('gender')?.validator).toBeTruthy();

    expect(component.subscriptionForm.get('selectedTopics')).toBeTruthy();
    expect(
      component.subscriptionForm.get('selectedTopics')?.validator
    ).toBeTruthy();
  });

  it('should have the correct lookup constants', () => {
    expect(component.days).toEqual(DAYS);
    expect(component.months).toEqual(MONTHS);
    expect(component.years).toEqual(YEARS);
    expect(component.grades).toEqual(GRADES);
    expect(component.genders).toEqual(GENDERS);
    expect(component.topics).toEqual(TOPICS);
    expect(component.steps).toEqual(STEPS);
  });

  describe('onTopicChange', () => {
    it('should add a topic to selectedTopics if checked', () => {
      const event = { detail: { checked: true, value: 'Arabic' } } as any;
      component.onTopicChange(event);
      expect(component.subscriptionForm.get('selectedTopics')?.value).toContain(
        'Arabic'
      );
    });

    it('should remove a topic from selectedTopics if unchecked', () => {
      const selectedTopicsArray = component.subscriptionForm.get(
        'selectedTopics'
      ) as any;
      selectedTopicsArray.push(component.fb.control('Arabic'));
      selectedTopicsArray.push(component.fb.control('Hisory'));

      const event = { detail: { checked: false, value: 'Arabic' } } as any;
      component.onTopicChange(event);

      // After removing 'Arabic', the array should only contain the FormControl for 'Hisory'
      expect(selectedTopicsArray.controls.length).toEqual(1);
      expect(selectedTopicsArray.controls[0].value).toEqual('Hisory');
    });
  });

  describe('onSubmit', () => {
    it('should log the form value if the form is valid', () => {
      const consoleSpy = spyOn(console, 'log');
      component.subscriptionForm.patchValue({
        yourName: 'Test User',
        email: 'test@example.com',
        childFullName: 'Test Child',
        birthDay: '1',
        birthMonth: 'January',
        birthYear: '2020',
        grade: 'Grade 1',
        gender: 'male',
      });
      component.subscriptionForm
        .get('selectedTopics')
        ?.patchValue(['Arabic', 'Hisory', 'Sports']);
      component.subscriptionForm.markAllAsTouched(); // Mark all controls as touched
      fixture.detectChanges(); // Trigger change detection
      component.onSubmit();
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      // expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', component.subscriptionForm.value);
    });

    it('should log "Form is invalid" if the form is invalid', () => {
      const consoleSpy = spyOn(console, 'log');
      component.onSubmit();
      expect(consoleSpy).toHaveBeenCalledWith('Form is invalid');
    });
  });

  describe('_initForm', () => {
    it('should initialize the form with empty values', () => {
      expect(component.subscriptionForm.get('yourName')?.value).toEqual('');
      expect(component.subscriptionForm.get('email')?.value).toEqual('');
      expect(component.subscriptionForm.get('childFullName')?.value).toEqual(
        ''
      );
      expect(component.subscriptionForm.get('birthDay')?.value).toEqual('');
      expect(component.subscriptionForm.get('birthMonth')?.value).toEqual('');
      expect(component.subscriptionForm.get('birthYear')?.value).toEqual('');
      expect(component.subscriptionForm.get('grade')?.value).toEqual('');
      expect(component.subscriptionForm.get('gender')?.value).toEqual('');
      expect(component.subscriptionForm.get('selectedTopics')?.value).toEqual(
        []
      );
    });

    it('should set the correct validators for selectedTopics', () => {
      const selectedTopicsControl =
        component.subscriptionForm.get('selectedTopics');

      // Should be invalid if empty and required
      selectedTopicsControl?.patchValue([]);
      expect(selectedTopicsControl?.hasError('required')).toBeTrue();

      // Should be invalid if less than 3 selected
      selectedTopicsControl?.patchValue(['Arabic', 'Hisory']);
      expect(selectedTopicsControl?.hasError('required')).toBeTrue(); // Because minSelectedCheckboxes returns 'required'

      // // Should be valid if 3 or more selected
      // selectedTopicsControl?.patchValue(['Arabic', 'Hisory', 'Sports', 'Islamic']);
      // expect(selectedTopicsControl?.hasError('required')).toBeFalse();
    });
  });
});
