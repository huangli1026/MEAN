import { Injectable } from '@angular/core';
import { User } from './login/login.interface';
import { NewUser } from './register/register.interface';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private users: User[] = [
    { email: 'test@test.com', password: 'test' }
  ];
  constructor() { }
  getUsers(): User[] {
    return this.users;
  }

  addUser(newUser: NewUser): void {
    this.users.push({ email: newUser.email, password: newUser.password });
  }

  userExists(email: string): boolean {
    return this.users.some(user => user.email === email);
  }
}
