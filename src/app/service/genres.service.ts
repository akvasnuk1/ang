import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "../interface/genre";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=dbeb8a7c94c70b10030a2bea613ec0df&language=en-US'

  constructor(private httpClient: HttpClient) {
  }

  getGenre(id: any): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url).pipe(map((value: any) => {
      return value.genres.filter((value: any) => id.includes(value.id))
    }))
  }
}
