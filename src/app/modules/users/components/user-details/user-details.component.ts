import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../interface/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.user = value.data)
  }

}
