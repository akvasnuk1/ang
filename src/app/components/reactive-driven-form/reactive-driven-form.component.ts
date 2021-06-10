import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarsService} from "../../service";


@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.css']
})
export class ReactiveDrivenFormComponent {
  myForm = new FormGroup({
    model: new FormControl(""),
    price: new FormControl(0),
    year: new FormControl(0),
  })

  constructor(private carsService: CarsService) {
  }


  save(myForm: FormGroup) {
    this.carsService.pushCars(myForm.value).subscribe(value => {
      myForm.reset();
    })
  }

  refresh(): void  {
    window.location.reload()
  }
}
