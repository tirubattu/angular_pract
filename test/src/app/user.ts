export class User{
  constructor(userModel:IUserModel){
    this.name = userModel.name;
    this.password = userModel.password;
    this.confirmPassword = userModel.confirmPassword;
    this.address = userModel.address;
  }
  name:string;
  password:string;
  confirmPassword:string;
  address:IAddress;
}


export interface IUserModel{
  name:string;
  password:string;
  confirmPassword:string;
  address:IAddress;
}

interface IAddress{
  city:string;
  state:string;
}
