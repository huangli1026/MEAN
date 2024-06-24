import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  cityInput:string=''
  cities:string []=["San Jose", "San Francisco", "Santa Monica", "Los Angeles"]
  filteredOptions: string[]=[]
  optionChosen: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onInput(){  //find city start with input value
    this.optionChosen=false;  //make sure that after choose the option, 
    //if user want to search again, search function still works
    this.filteredOptions=this.cities.filter(option=> option.toLowerCase().startsWith(this.cityInput.toLowerCase()))
  }
  updateInput(option: string){
    this.cityInput=option; //update input text to the city option
    this.onInput();  //update filterOption since input text changed
    this.optionChosen=true; //close the drop down otions
  }
}
