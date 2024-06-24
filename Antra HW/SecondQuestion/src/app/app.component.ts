import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  users: any[] = [];
  constructor(private userService: UserService) {}

  search() {
    if (/^[a-zA-Z0-9-]+$/.test(this.username)) {
      this.userService.searchUsers(this.username).subscribe(response => {
        this.users = response.items;
      });
    } else {
      alert('Invalid username');
    }
  }
}
