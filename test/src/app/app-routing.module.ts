import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsCustomValidatorComponent } from './reactive-forms-custom-validator/reactive-forms-custom-validator';

const routes: Routes = [
  { path: 'formsTemplate', component: TemplateDrivenFormsComponent },
  { path: 'formsReactiveCustomValidator', component: ReactiveFormsCustomValidatorComponent },
  { path: 'dynamicForms', component: DynamicFormArrayComponent },
  { path: 'formsReactive', component: ReactiveFormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
