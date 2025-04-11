/**
 * Validator function to ensure a minimum number of checkboxes are selected.
 *
 * @param {number} min The minimum number of checkboxes that must be selected.
 * @returns A validator function that checks the minimum selection requirement.
 */

import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormArray,
} from '@angular/forms';

export function minArrayLengthValidator(min = 1): ValidatorFn {
  return (formArray: AbstractControl): ValidationErrors | null => {
    const array = formArray as FormArray;
    return array.length >= min ? null : { minLength: true };
  };
}
