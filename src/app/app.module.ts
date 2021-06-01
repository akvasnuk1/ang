import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './component/user/user.component';
import {UsersComponent} from './component/users/users.component';
import {PostsComponent} from './component/posts/posts.component';
import {PostComponent} from './component/post/post.component';
import {RouterModule, Routes} from "@angular/router";
import {UserDetailsComponent} from './component/user-details/user-details.component';
import {PostsDetailsComponent} from './component/posts-details/posts-details.component';
import {UsersResolveService} from "./service/users-resolve.service";
import {PostsResolveService} from "./service/posts-resolve.service";
import {UserResolveService} from "./service/user-resolve.service";
import {PostResolveService} from "./service/post-resolve.service";


const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {data: UsersResolveService}, children: [
      {path: ':id', component: UserDetailsComponent, resolve: {data: UserResolveService}}
    ]
  },
  {
    path: 'posts', component: PostsComponent, resolve: {data: PostsResolveService}, children: [
      {path: ":id", component: PostsDetailsComponent, resolve: {data: PostResolveService}}
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
