import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarsService} from "../../service";


@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.css']
})
export class ReactiveDrivenFormComponent {
  modelControl = new FormControl("");
  priceControl = new FormControl(0);
  yearControl = new FormControl(0);
  myForm = new FormGroup({
    model: this.modelControl,
    price: this.priceControl,
    year: this.yearControl
  })

  constructor(private carsService: CarsService) {
  }


  save() {
    this.carsService.pushCars(this.myForm.value).subscribe(value => {
      this.myForm.reset();
    })
  }

  refresh(): void {
    window.location.reload()
  }
}
