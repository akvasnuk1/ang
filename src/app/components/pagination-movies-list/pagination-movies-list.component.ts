import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../interface";


@Component({
  selector: 'app-pagination-movies-list',
  templateUrl: './pagination-movies-list.component.html',
  styleUrls: ['./pagination-movies-list.component.css']
})
export class PaginationMoviesListComponent implements OnInit {
  movies: Movie[]

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.movies = value.data.results)

  }

}
