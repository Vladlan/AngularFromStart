import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  ContentChild, DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @ContentChild('carHeading') carHeading: ElementRef;
   // #1
  constructor() {
    // console.log(this.carHeading); //=> will be undefined
    console.log('constructor');
  }

  // #2
  ngOnInit() {
    console.log('ngOnInit');
  }

  // #3
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  // #4
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // #5
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // #6
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // #7
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    // console.log(this.carHeading);
  }

  // #8
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // #9
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  // public props in CarComponent
  // carName = 'Mersedes';
  // carYear = '2017';
  //
  // getCarName() {
  //   return this.carName;
  // }

  @Input() car: {name: string, year: number};
  @Input() n: number;



}
