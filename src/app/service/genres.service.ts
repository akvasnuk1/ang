import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Genre} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private url = 'https://api.themoviedb.org/3/genre/movie/list'

  constructor(private httpClient: HttpClient) {
  }

  getGenre(id: any): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(this.url).pipe(map((value: any) => {
      return value.genres.filter((value: any) => id.includes(value.id))
    }))
  }
}
