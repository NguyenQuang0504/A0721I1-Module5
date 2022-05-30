import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DetailCustomerComponent} from './detail-customer/detail-customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateCustomerComponent } from './update-customer/update-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
