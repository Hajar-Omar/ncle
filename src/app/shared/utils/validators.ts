export function minSelectedCheckboxes(min = 1) {
  const validator = (formArray) => {
    const totalSelected = formArray.controls
      .map((control) => control.value)
      .reduce((prev, next) => (next ? prev + next : prev), 0);
    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
