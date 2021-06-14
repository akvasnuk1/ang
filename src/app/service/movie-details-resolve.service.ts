import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolveService implements Resolve<Observable<Object>> {
  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Object>> | Promise<Observable<Object>> | Observable<Object> {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/' + route.params.id);
  }
}
