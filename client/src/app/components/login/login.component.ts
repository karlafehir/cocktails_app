import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  user: User = {
    name: '',
    email: '',
    password: ''
  };
  
  constructor(private loginService: LoginService, private apiService : ApiServiceService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAnimation();
  }

  onSubmit() {
    this.loginService.login(this.user).subscribe(
      (response) => {
        this.loginService.handleLoginResponse(response);
      },
      (err) => {
        this.loginService.handleError(err);
      }
    );
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}
