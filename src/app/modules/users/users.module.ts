import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent, UserDetailsComponent, UsersComponent} from "./components";
import {UserResolveService, UsersResolveService} from "./service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UsersResolveService, UserResolveService]
})
export class UsersModule {
}
