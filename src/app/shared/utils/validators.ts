/**
 * Validator function to ensure a minimum number of checkboxes are selected.
 *
 * @param {number} min The minimum number of checkboxes that must be selected.
 * @returns A validator function that checks the minimum selection requirement.
 */
export function minSelectedCheckboxes(min = 1) {
  const validator = (formArray) => {
    const totalSelected = formArray.controls
      .map((control) => control.value)
      .reduce((prev, next) => (next ? prev + next : prev), 0);
    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
