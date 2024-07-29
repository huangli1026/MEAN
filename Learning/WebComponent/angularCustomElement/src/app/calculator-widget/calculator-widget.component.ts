import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-widget',
  templateUrl: './calculator-widget.component.html',
  styleUrls: ['./calculator-widget.component.css']
})
export class CalculatorWidgetComponent implements OnInit {

  @Input() widgetInput="Angular Calculator Component";
  @Output() widgetOutput=new EventEmitter<number>();

  number1=0;
  number2=0;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.widgetOutput.emit(this.number1+this.number2);
  }
  subtract(){
    this.widgetOutput.emit(this.number1-this.number2);
  }
  multiply(){
    this.widgetOutput.emit(this.number1*this.number2);
  }
  divide(){
    this.widgetOutput.emit(this.number1/this.number2);
  }

}
