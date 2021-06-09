import {Component, OnInit} from '@angular/core';

import {User} from "../../interface/user";                        // TODO  додай index файл в папку interface також
import {DataTransferService, UsersService} from "../../services";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {                    // TODO  імплементуй OnInit якщо використовуєш ngOnInit в компоненті
  users: User[];
  user: User;
  username: string;

  constructor(private usersService: UsersService, private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => {
      this.users = value;
    });
    this.username = this.dataTransfer.store.getValue();
  }

  catchUser(value: User) {
    this.user = value
  }

  Login(): void {
    this.dataTransfer.store.next(this.user.username);
    this.username = this.dataTransfer.store.getValue();
  }
}
