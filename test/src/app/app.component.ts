import { IUserModel, User } from './user';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user:User;
  constructor(){
    let userModel:IUserModel = {
      name:'',
      password:'',
      confirmPassword:'',
      address:{
        city:'',
        state:''
      }
    }
    this.user = new User(userModel);
  }

  @ViewChild('regForm') regForm!:NgForm;


  ngOnInit(){

  }

  onGetData(){
    let userModel:IUserModel = {
      name:'Tiru',
      password:'abc',
      confirmPassword:'abc',
      address:{
        city:'Hyd',
        state:'Tel'
      }
    }
    this.user = new User(userModel);
  }


}
