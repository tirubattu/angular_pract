export class Employee implements IEmployeeInterface {
  name: string;
  age: string;
  skills: ISkills[];
  address: IAddress;
  constructor(options:IEmployeeInterface) {
    this.name = options.name;
    this.age = options.age;
    this.skills = options.skills;
    this.address = options.address;
  }
}

export interface IAddress {
  city: string;
  state: string;
}

export interface ISkills {
  name: string;
  exp: string;
}

export interface IEmployeeInterface{
  name: string;
  age: string;
  skills: ISkills[];
  address: IAddress;
}
