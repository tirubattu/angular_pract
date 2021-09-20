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

  ngOnInit() {
    this.regForm.get("name")?.valueChanges.subscribe(x=>{
      console.log('name value changed >> ',x);
    })
    this.regForm.get("password")?.valueChanges.subscribe(x=>{
      console.log('passord value changed >> ',x);
    })
    this.regForm.valueChanges.subscribe(x=>{
      console.log('form value changed >> ',x);
    })
  }

  onUpdateName(){
    this.regForm.get("name")?.setValue('Tiru',{ onlySelf: true, emitEvent:false });
  }


  get name() {
    return this.regForm.get('name');
  }

  get password() {
    return this.regForm.get('password');
  }

}
