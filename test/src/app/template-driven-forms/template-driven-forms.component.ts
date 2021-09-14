import { IUserModel, User } from './user';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html'
})
export class TemplateDrivenFormsComponent{
  user: User;
  constructor() {
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
  }

  @ViewChild('regForm') regForm!: NgForm;

  ngOnInit() {

  }

  onGetData() {
    let userModel: IUserModel = {
      name: 'Tiru',
      password: 'abc',
      confirmPassword: 'abc',
      address: {
        city: 'Hyd',
        state: 'Tel',
      },
    };
    this.user = new User(userModel);
  }

}
