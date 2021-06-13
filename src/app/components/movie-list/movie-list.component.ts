import {Component, Input, OnInit} from '@angular/core';
import {GenresService} from "../../service";
import {Movie} from "../../interface";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input()
  movie: Movie
  movieGenre: any[]

  constructor(private genresService: GenresService) {
  }

  ngOnInit(): void {
    this.genresService.getGenre(this.movie.genre_ids).subscribe((value: any) => {
        value.forEach((value: any) => this.movieGenre = value.name)
      }
    )

  }

}
