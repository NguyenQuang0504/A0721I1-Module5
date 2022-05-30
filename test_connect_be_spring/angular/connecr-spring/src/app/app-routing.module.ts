import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailCustomerComponent} from "./detail-customer/detail-customer.component";
import {HomeComponent} from "./home/home.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {UpdateCommand} from "@angular/cli/commands/update-impl";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'findById/:id', component:DetailCustomerComponent},
  {path:'create', component:CreateCustomerComponent},
  {path:'update/:id', component:UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
