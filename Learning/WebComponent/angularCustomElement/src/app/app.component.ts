import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularCustomElement';

  result!: number;

  // test(event:number){
  //   console.log(event)

  // }
}
