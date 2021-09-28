import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsCustomValidatorComponent } from './reactive-forms-custom-validator/reactive-forms-custom-validator';
import { HttpComponent } from './http/http.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'formsTemplate', component: TemplateDrivenFormsComponent },
  {
    path: 'formsReactiveCustomValidator',
    component: ReactiveFormsCustomValidatorComponent,
  },
  { path: 'dynamicForms', component: DynamicFormArrayComponent },
  { path: 'formsReactive', component: ReactiveFormsComponent },
  { path: 'http', component: HttpComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
