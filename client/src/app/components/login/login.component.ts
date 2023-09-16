import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}

interface LoginResponse {
  userId: number;
  token: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post<LoginResponse>('http://localhost:8080/login', this.user).subscribe(
      (response) => {
        const { userId, token } = response;
        localStorage.setItem('token', token);
        this.router.navigate(['/collection']);
      },
      (err) => {
        console.log('Error logging in', err);
      } 
    );
  }
}
