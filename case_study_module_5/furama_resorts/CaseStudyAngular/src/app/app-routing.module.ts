import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FuramaEmployeeComponent} from './furama-employee/furama-employee.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';


const routes: Routes = [
  {path: 'employee', component: FuramaEmployeeComponent},
  {path: 'employee/update/:id', component: EmployeeUpdateComponent},
  {path: 'employee/create', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
