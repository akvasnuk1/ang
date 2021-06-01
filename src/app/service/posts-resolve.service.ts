import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../modules/post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<Observable<Post[]>> {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Post[]>> | Promise<Observable<Post[]>> | Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url)
  }
}
