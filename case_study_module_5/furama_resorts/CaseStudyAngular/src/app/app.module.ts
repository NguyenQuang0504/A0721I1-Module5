import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FuramaServiceComponent } from './furama-service/furama-service.component';
import { FuramaEmployeeComponent } from './furama-employee/furama-employee.component';
import { FuramaCustomerComponent } from './furama-customer/furama-customer.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ServiceUpdateComponent } from './service-update/service-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    FuramaServiceComponent,
    FuramaEmployeeComponent,
    FuramaCustomerComponent,
    EmployeeUpdateComponent,
    CreateEmployeeComponent,
    ServiceUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
