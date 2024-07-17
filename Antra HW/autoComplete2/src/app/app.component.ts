import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autoComplete2';
  onItemSelected(item: string) {
    console.log('Selected item:', item);
    // You can perform other actions based on the item selected here
  }
}
