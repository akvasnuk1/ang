import {Component, OnInit} from '@angular/core';
import {Post} from "../../modules/post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]

  constructor(private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.data.subscribe(value => this.posts = value.data)
  }

}
