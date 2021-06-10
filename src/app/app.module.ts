import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent, CarComponent, CarsComponent, ReactiveDrivenFormComponent} from "./components";


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    ReactiveDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
