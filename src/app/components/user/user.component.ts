import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../interface/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  lifter = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.lifter.emit(this.user)
  }
}
