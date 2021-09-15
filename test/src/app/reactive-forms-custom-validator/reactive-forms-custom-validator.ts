import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { restrictWordsWithParam } from './custom-validator-pass-param';
import { restrictWordsValidator } from './custom-validators';

@Component({
  selector: 'app-reactive-forms-custom-validator',
  templateUrl: './reactive-forms-custom-validator.html'
})
export class ReactiveFormsCustomValidatorComponent {

  regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      password: ['',[restrictWordsWithParam('Admin')]]
    });
  }

  ngOnInit() {}

  get name() {
    return this.regForm.get('name');
  }

  get password() {
    return this.regForm.get('password');
  }

}
