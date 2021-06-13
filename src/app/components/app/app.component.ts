import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  checkStatus: boolean = false

  darkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode")
    return "dark-mode"
  }

  check() {
    this.checkStatus = true
  }
}
