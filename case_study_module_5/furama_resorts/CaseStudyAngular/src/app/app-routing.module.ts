import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FuramaEmployeeComponent} from './furama-employee/furama-employee.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';


const routes: Routes = [
  {path: 'employee', component: FuramaEmployeeComponent},
  {path: 'employee/update/:cccd', component: EmployeeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
