import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.css']
})
export class AverageRatingComponent implements OnInit {
  @Input()
  ratings!: { name: string; content: string; rate: number; }[];
  
  averageRate!: number;
  
  constructor() { }

  ngOnInit(): void {
    this.calculateAverage()
  }

  calculateAverage(): number {
    return this.averageRate = Math.ceil(this.ratings.reduce((acc, curr) => acc + curr.rate, 0) / this.ratings.length);
  }

}
