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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    FuramaServiceComponent,
    FuramaEmployeeComponent,
    FuramaCustomerComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
