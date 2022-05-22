import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailCustomerComponent} from "./detail-customer/detail-customer.component";
import {HomeComponent} from "./home/home.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'findById/:id', component:DetailCustomerComponent},
  {path:'create', component:CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
