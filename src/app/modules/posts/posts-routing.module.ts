import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostDetailsComponent, PostsComponent} from "./components";
import {PostResolveService, PostsResolveService} from "./service";


const routes: Routes = [
  {path:"",component:PostsComponent,resolve:{data:PostResolveService},children:[{
    path:":id",component:PostDetailsComponent,resolve:{data:PostsResolveService}
    }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
