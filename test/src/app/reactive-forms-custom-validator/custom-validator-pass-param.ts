import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
 * Passing parameter to custom validator function
 * This is factory function which returns Validator function
 * Which takes Abstract control as param.
 * It implements customValidatorFn interface
 * This interface takes exactly one param and returns Errors or Null
 * The current implementation hardcoded admin value. This can be passed as param
 * @param val
 * @returns
 */

export function restrictWordsWithParam(val:string):ValidatorFn {

  return function(control:AbstractControl):ValidationErrors | null{

    let v = control.value.toLowerCase();

    if(v === val.toLowerCase()){
      return {
        restrictWords: true,
        requiredValue: val,
        actualValue: v,
      }
    }
    return null;
  }

}
