import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Rating:</h1>
  <app-rating [name]='ratings[0].name' [content]="ratings[0].content" [rate]="ratings[0].rate"> </app-rating>

  <h1>AverageRating</h1>
  <app-average-rating [ratings]='ratings'></app-average-rating>

  <h1>RatingList</h1>
  <app-ratings-list [ratings]='ratings'></app-ratings-list>
  `,
  styles: [
    `
    h1{
      color:blue;
      font-size: 18px;
      font-weight: normal;
    }
    `
  ]
})
export class AppComponent {
  ratings = [
    { name: "Keisha Holmes", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rate: 4 },
    { name: "Allison Ratliff", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", rate: 1 }
  ];
}
