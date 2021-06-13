import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {HttpClientModule} from "@angular/common/http";


import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {
  AppComponent,
  HeaderComponent,
  MovieDetailsComponent, MovieListComponent,
  MoviesListComponent, PaginationComponent, PaginationMovieListComponent,
  PaginationMoviesListComponent
} from "./components";
import {MovieDetailsResolveService, PaginationResolveService} from "./service";


const routes: Routes = [
  {path: "movies", component: MoviesListComponent},
  {path: "movies/:page", component: PaginationMoviesListComponent, resolve: {data: PaginationResolveService}},
  {path: "movies/details/:id", component: MovieDetailsComponent, resolve: {data: MovieDetailsResolveService}},
  {path: "movies/:page/details/:id", component: MovieDetailsComponent, resolve: {data: MovieDetailsResolveService}}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieListComponent,
    PaginationComponent,
    MovieDetailsComponent,
    PaginationMoviesListComponent,
    PaginationMovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
