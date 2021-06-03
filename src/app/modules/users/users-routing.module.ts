import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailsComponent, UsersComponent} from "./components";
import {UserResolveService, UsersResolveService} from "./service";


const routes: Routes = [
  {path:'',component:UsersComponent,resolve:{data:UsersResolveService},children:[
      {path:':id',component:UserDetailsComponent,resolve:{data:UserResolveService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
