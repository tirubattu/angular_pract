import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * This is custom validator function.
 * Which takes Abstract control as param.
 * It implements customValidatorFn interface
 * This interface takes exactly one param and returns Errors or Null
 * The current implementation hardcoded admin value. This can be passed as param
 * @param control This is AbstractControl for FormGroup, FormControlName, FormArray
 * @returns Returns Validation Errors or null if no erros
 */
export function restrictWordsValidator(control: AbstractControl): ValidationErrors | null {

  let val = control.value;

  if (val == 'admin') {
    return {
      restrictWords: true,
      requiredValue: 'Non Admin',
      actualValue: val,
    };
  }

  return null;
}
