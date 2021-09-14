import { IUserModel, User } from './user';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent {
  user: User;
  regForm: FormGroup;
  constructor(private fb: FormBuilder) {
    let userModel: IUserModel = {
      name: '',
      password: '',
      confirmPassword: '',
      address: {
        city: '',
        state: '',
      },
    };
    this.user = new User(userModel);
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      password: [''],
      confirmPassword: [''],
      address: fb.group({
        city: [''],
        state: [''],
      }),
    });
  }

  ngOnInit() {}

  setFormData() {
    let userModel: IUserModel = {
      name: 'Tiru',
      password: 'aaa',
      confirmPassword: 'aaa',
      address: {
        city: 'Hyd',
        state: 'Tel',
      },
    };
    this.user = new User(userModel);
    this.regForm.setValue(userModel);
  }

  get name() {
    return this.regForm.get('name');
  }

  get password() {
    return this.regForm.get('password');
  }

  get confirmPassword() {
    return this.regForm.get('confirmPassword');
  }

  get city() {
    return this.regForm.get('city');
  }

  get state() {
    return this.regForm.get('state');
  }
}
