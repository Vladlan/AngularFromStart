import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 1000);
  }

  canAddCar = false;
  addCarStatus = false;
  inputText = 'Dafault text';
  carName = '';
  carYear = '2017';

  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: string}>();
  @Output('onDeleteCar') carDeleteEmitter = new EventEmitter<{}>();
  @ViewChild('carYearInput') carYearInput: ElementRef;

  addCar(elem: HTMLInputElement) {
    console.log(elem);
    console.log(this.carYearInput);

    this.carEmitter.emit({
      name: this.carName,
      year: this.carYear
    });

    this.addCarStatus = !this.addCarStatus;
    this.carName = '';
  }

  deleteCar() {
    this.carDeleteEmitter.emit();
  }

  onKeyUp(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }
}
