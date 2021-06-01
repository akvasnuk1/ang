import {Component, OnInit} from '@angular/core';
import {Post} from "../../modules/post";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {
  post: Post

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.post = value.data)
  }

}
