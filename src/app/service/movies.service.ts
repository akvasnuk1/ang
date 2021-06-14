import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = 'https://api.themoviedb.org/3/movie/top_rated';

  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<Object> {
    return this.httpClient.get<Object>(this.url)
  }

}
