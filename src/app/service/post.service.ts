import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../modules/post";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private x: number = 0;
  private url = ''

  constructor(private httpPost: HttpClient) {
  }

  getPost(): Observable<Post[]> {

    this.x++;
    this.url = 'https://jsonplaceholder.typicode.com/posts?userId=' + this.x
    return this.httpPost.get<Post[]>(this.url)
  }
}



