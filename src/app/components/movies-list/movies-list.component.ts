import {Component, OnInit} from '@angular/core';
import {Movie} from "../../interface";
import {MoviesService} from "../../service";




@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[]

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((value: any) => {
      this.movies = value.results;
    })
  }

}
