import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private loginService: LoginService) {}

  isLoggedIn(): boolean {
    return this.loginService.isAuthenticated();
  }
}
