import {Component, OnInit} from '@angular/core';
import {ICar} from "../../interface";
import {CarsService} from "../../service";



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.carsService.getCars().subscribe(value => this.cars = value)
  }
}
