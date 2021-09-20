import { Employee, IEmployeeInterface } from './employee';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
  styleUrls: ['./dynamic-form-array.component.scss'],
})

/**
 * Dynamic form example
 * Step1 : "empForm: is root form group
 * Step2 : "employees": single formControl which FormArray type; For FormGroup create form control of any type like FormControl, FOrmGroup, FormArray
 * Step3 : "newEmployee": newEmployee is a group which has name,age, skills, address controls. Skills is FormArray and Address is nested group
 * Step4 : "onAddEmployee": push "newEmployee" to "employees" FormArray
 * Step5 : "onRemoveSkill" remove employee from employees formArray
 * Step6 : "employeeSkills" Creating skills FormArray of given employee index
 * Step7 : "newSkill" Returns new skill group; skill element structure
 * Step8 : "onAddSkill" Pushing newSkill to skillArray of given employee object
 * Step9 : "onRemoveSkill" Remove skill of given employee index and given skill index
 * Step10 : "setFormData" 1. Build the form dynamically based on form data structure.
 *          2.Use setValue or pathchValue to update form with initial data
 */
export class DynamicFormArrayComponent implements OnInit {
  empForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Step1
    this.empForm = this.fb.group({
      employees: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  /**
   * Step2
   * "employees": single formControl which is FormArray type;
   * For FormGroup create form control of any type like FormControl, FormGroup, FormArray
   * @returns employees as FormArray
   */
  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  /**
   * Step3
   * newEmployee is a group which has name, age, skills, address controls.
   * Skills is FormArray and Address is nested group
   * @returns employee group instance
   */
  newEmployee() {
    return this.fb.group({
      name: '',
      age: '',
      skills: this.fb.array([]),
      address: this.fb.group({
        city: '',
        state: '',
      }),
    });
  }

  /**
   * Step4
   * push "newEmployee" to "employees" FormArray
   */
  onAddEmployee() {
    this.employees().push(this.newEmployee());
  }

  /**
   * Step5
   * Remove employee at given index
   * @param ind index of employees formArray
   */
  onRemoveEmployee(ind: number) {
    this.employees().removeAt(ind);
  }

  /**
   * Step6
   * Creating skills FormArray of given employee index
   * @param ind is employee index
   * @returns employee skills at given array
   */
  employeeSkills(ind: number): FormArray {
    return this.employees().at(ind).get('skills') as FormArray;
  }

  /**
   * Step7
   * Returns new skill group; skill element structure
   * @returns form group for skills FormArray
   */
  newSkill() {
    return this.fb.group({
      name: '',
      exp: '',
    });
  }

  /**
   * Step8
   * Pushing newSkill to skillArray of given employee object
   * @param ind index
   */
  onAddSkill(ind: number) {
    this.employeeSkills(ind).push(this.newSkill());
  }

  /**
   * Step9
   * Remove skill of given employee index and given skill index
   * @param empInd employee index
   * @param skillInd skill index
   */
  onRemoveSkill(empInd: number, skillInd: number) {
    this.employeeSkills(empInd).removeAt(skillInd);
  }

  /**
   * Step10
   * Step 1: Build the form dynamically based on form data structure
   * Step2: Use setValue or pathchValue to update form with initial data
   */
  setFormData() {
    let employees = [
      {
        name: 'Tiru',
        age: '44',
        skills: [
          {
            name: 'HTML',
            exp: '5',
          },
          {
            name: 'CSS',
            exp: '5',
          },
          {
            name: 'JS',
            exp: '8',
          },
        ],
        address: {
          city: 'Hyd',
          state: 'TS',
        },
      },
      {
        name: 'Radha Krishna',
        age: '15',
        skills: [
          {
            name: 'Maths',
            exp: '10',
          },
        ],
        address: {
          city: 'Nandigama',
          state: 'AP',
        },
      },
      {
        name: 'RadheShyam',
        age: '8',
        skills: [
          {
            name: 'Science ',
            exp: '5',
          },
        ],
        address: {
          city: 'Nandigama',
          state: 'Ap',
        },
      },
    ];

    employees.forEach((emp, empInd) => {
      let newEmp = this.newEmployee();
      this.employees().push(newEmp);
      emp.skills.forEach((skill) => {
        let newSkill = this.newSkill();
        this.employeeSkills(empInd).push(this.newSkill());
      });
    });

    this.empForm.setValue({ employees: employees });

    console.log('emp form data >> ', this.empForm.value);
  }
}
