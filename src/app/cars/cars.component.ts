import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  dates = [
    new Date(1918, 3, 4),
    new Date(1914, 3, 4),
    new Date(1917, 3, 4),
    new Date(1961, 3, 4),
  ];

  cars2 = [
    {name: 'Audi', year: '1991'},
    {name: 'Mercedes', year: '1992'},
    {name: 'Ford', year: '1992'},
    {name: 'BMW', year: '1992'}
  ];

  updateCarList(car: {name: string, year: string}) {
    this.cars2.push(car);
  }

  deleteCar() {
    this.cars2.splice(0, 1);
  }

  constructor() {
  }
}
