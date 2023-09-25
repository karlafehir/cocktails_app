import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
import { LoginResponse } from '../interfaces/LoginResponse';
import { RegisterResponse } from '../interfaces/RegisterResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8080/login', user);
  }

  handleLoginResponse(response: LoginResponse): void {
    const { userId, token } = response;
    localStorage.setItem('token', token);
    this.router.navigate(['/collection']);
  }

  handleError(err: any): void {
    console.error('Error logging in', err);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; 
  }

  register(user: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>('http://localhost:8080/register', user);
  }

 handleRegisterResponse(response: RegisterResponse): void {
    // Handle successful registration, e.g., navigate to login page
    this.router.navigate(['/login']);
  }

  handleRegisterError(error: any): void {
    console.error('Error registering user', error);
    // Handle registration error, e.g., display an error message to the user
  }  

}
