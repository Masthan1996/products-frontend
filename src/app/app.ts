import { Component, signal } from '@angular/core';
import { AuthService } from './auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  constructor(public auth: AuthService, private router: Router) { }
  logout() { this.auth.logout(); this.router.navigate(['/login']); }
}
