import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from './register.interface';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private mockDataService: MockDataService) {
    this.registerForm = this.fb.group({
      // name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
   }
   onSubmit() {
    const {  email, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (this.mockDataService.userExists(email)) {
      this.errorMessage = 'User already exists';
      return;
    }

    // this.mockUsers.push({ name, email, password, confirmPassword });
    const newUser: NewUser = { email, password};
    this.mockDataService.addUser(newUser);
    // console.log(this.mockDataService.getUsers())
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
