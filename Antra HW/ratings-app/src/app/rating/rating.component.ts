import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input('name')
  public name!: string;
  
  @Input('content')
  public content!: string;
  
  @Input('rate')
  public rate!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
