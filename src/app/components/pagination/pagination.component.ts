import {Component} from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  x: number = 8


  inc() {
    this.x === 500 ? this.x = 1 : this.x++
  }

  dec() {
    this.x === 1 ? this.x = 500 : --this.x
  }

  state() {
    this.x = 8
  }
}
