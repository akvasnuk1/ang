import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = 'https://api.themoviedb.org/3/movie/top_rated';
  private url2 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=dbeb8a7c94c70b10030a2bea613ec0df&language=en-US&page='

  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<Object> {
    return this.httpClient.get<Object>(this.url, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmViOGE3Yzk0YzcwYjEwMDMwYTJiZWE2MTNlYzBkZiIsInN1YiI6IjYwYzQ1MTkwNTllOGE5MDA3OGRiYWQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dcgtl_7lHfObt0qaYNQtqd2lYXI9zGDuiZIURDF8YnY',
        'Content-Type': 'application/json;charset=utf-8'
      })
    })
  }

  getMoviesOnClick(id: string): Observable<Object> {
    return this.httpClient.get<Object>(this.url2 + id)
  }
}
