import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.css']
})
export class RatingsListComponent implements OnInit {
  @Input()
  ratings: { name: string; content: string; rate: number; }[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
