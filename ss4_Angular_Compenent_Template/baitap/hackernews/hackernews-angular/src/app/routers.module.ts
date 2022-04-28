import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";

const routers:Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'list', component:ListComponent}
  ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ]
})
export class RoutersModule { }
