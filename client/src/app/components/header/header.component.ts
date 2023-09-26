import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mainMenu!: HTMLElement;
  closeMenu!: HTMLElement;
  openMenu!: HTMLElement;
  menuItems!: NodeListOf<HTMLAnchorElement>;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.mainMenu = document.querySelector('.mainMenu')!;
    this.closeMenu = document.querySelector('.closeMenu')!;
    this.openMenu = document.querySelector('.openMenu')!;
    this.menuItems = document.querySelectorAll('nav .mainMenu li a');

    this.openMenu.addEventListener('click', this.show.bind(this));
    this.closeMenu.addEventListener('click', this.close.bind(this));

    this.menuItems.forEach(item => {
      item.addEventListener('click', () => {
        this.close();
      });
    });
  }

  isLoggedIn(): boolean {
    return this.loginService.isAuthenticated();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  show(): void {
    this.mainMenu.style.display = 'flex';
    this.mainMenu.style.top = '0';
  }

  close(): void {
    this.mainMenu.style.top = '-100%';
  }
}
