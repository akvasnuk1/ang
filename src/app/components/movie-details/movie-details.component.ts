import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesRatingService} from "../../service";
import {MovieDetails} from "../../interface";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: MovieDetails
  genre1: string
  genre2: string

  constructor(private activatedRoute: ActivatedRoute, private moviesRatingService: MoviesRatingService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => {
      this.movieDetails = value.data
      this.genre1 = value.data.genres[0].name
      this.genre2 = value.data.genres[1].name
    })

  }

  checkStar($event: any) {
    let rating: number;
    if ($event.target.value) {
      rating = +$event?.target?.value * 2
      this.moviesRatingService.movieRatingPost(rating, this.movieDetails.id).subscribe(value => console.log(value))
    }
  }
}
