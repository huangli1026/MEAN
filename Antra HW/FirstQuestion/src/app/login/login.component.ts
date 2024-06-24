import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './login.interface';
import { Router } from '@angular/router';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string='';

  constructor(private fb:FormBuilder, private router: Router, private mockDataService: MockDataService) { 
    this.loginForm=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    const { email, password } = this.loginForm.value;
    const user = this.mockDataService.getUsers().find(u => u.email === email && u.password === password);

    if (user) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'The user does not exist.';
    }
  }
  }

