import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsCustomValidatorComponent } from './reactive-forms-custom-validator/reactive-forms-custom-validator';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { HttpComponent } from './http/http.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ReactiveFormsCustomValidatorComponent,
    DynamicFormArrayComponent,
    DynamicFormsComponent,
    HttpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
