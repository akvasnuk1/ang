import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent,PostComponent,PostDetailsComponent } from './components';
import {HttpClientModule} from "@angular/common/http";
import {PostResolveService,PostsResolveService} from "./service";




@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostResolveService,
    PostsResolveService
  ]
})
export class PostsModule { }
