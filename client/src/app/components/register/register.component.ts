import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    name: '',
    email: '',
    password: ''
  };
  
  constructor(private loginService: LoginService, private apiService : ApiServiceService, private router: Router ) {}

  ngOnInit(): void {
    this.apiService.getAnimation();
  }


  onSubmit() {
    this.loginService.register(this.user).subscribe(
      (response) => {
        this.loginService.handleRegisterResponse(response);
      },
      (err) => {
        this.loginService.handleRegisterError(err);
      }
    );
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
