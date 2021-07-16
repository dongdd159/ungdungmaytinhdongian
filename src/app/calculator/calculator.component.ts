import { Component, OnInit } from '@angular/core';
import {Calculator} from '../calculator';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator:Calculator = {
    number1: 0,
    number2: 0
  };
  result?: number;

  constructor() { }

  ngOnInit(): void {
  }

  Add(){
    this.result = this.calculator.number1 + this.calculator.number2;
  }
  Sub(){
    this.result = this.calculator.number1-this.calculator.number2;
  }
  Mul(){
    this.result = this.calculator.number1*this.calculator.number2;
  }
  Div(){
    this.result = this.calculator.number1/this.calculator.number2;
  }

}
