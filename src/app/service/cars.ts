import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../interface";


@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private url = "http://92.253.239.109//api/v1/cars";

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(this.url)
  }

  pushCars(car: ICar) {
    return this.httpClient.post<ICar>(this.url, car)
  }

}
