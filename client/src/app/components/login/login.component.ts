import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private loginService: LoginService) {}

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

  logout(): void {
    localStorage.removeItem('token');
  }
}
