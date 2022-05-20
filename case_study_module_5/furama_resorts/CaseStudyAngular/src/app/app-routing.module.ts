import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FuramaEmployeeComponent} from './furama-employee/furama-employee.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {FuramaServiceComponent} from './furama-service/furama-service.component';
import {ServiceUpdateComponent} from './service-update/service-update.component';


const routes: Routes = [
  {path: 'employee', component: FuramaEmployeeComponent},
  {path: 'employee/update/:id', component: EmployeeUpdateComponent},
  {path: 'employee/create', component: CreateEmployeeComponent},
  {path: 'service', component: FuramaServiceComponent},
  {path: 'service/update/:name/:id', component: ServiceUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
