import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesRatingService {

  constructor(private httpClient: HttpClient) {
  }

  movieRatingPost(rating: number, id: number) {
    return this.httpClient.post("https://api.themoviedb.org/3/movie/" + id + "/rating?api_key=dbeb8a7c94c70b10030a2bea613ec0df&session_id=816a2446c9412128ae6b4cf21a251eab7f027531", rating)
  }
}
