import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Post} from "../modules/post";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Observable<Post>> {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Post>> | Promise<Observable<Post>> | Observable<Post> {
    return this.httpClient.get<Post>(this.url + '/' + route.params.id);
  }


}
