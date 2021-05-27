import {Component, OnInit} from '@angular/core';
import {PostService} from "../../service/post.service";
import {Post} from "../../modules/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPost().subscribe(value => this.posts = value)
  }

}
