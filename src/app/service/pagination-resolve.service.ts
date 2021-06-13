import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaginationResolveService implements Resolve<Observable<Object>> {
  private url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=dbeb8a7c94c70b10030a2bea613ec0df&language=en-US&page='

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Object>> | Promise<Observable<Object>> | Observable<Object> {
    return this.httpClient.get<Object>(this.url + route.params.page)
  }


}
