export class Employee {
  name: string;
  age: number;
  skills: string[];
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

export interface IEmployeeInterface{
  name: string;
  age: number;
  skills: string[];
  address: IAddress;
}
