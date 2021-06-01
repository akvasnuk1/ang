import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../modules/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<Observable<User[]>> {
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<User[]>> | Promise<Observable<User[]>> | Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
  }
}
