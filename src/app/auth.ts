import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token: string | null = null;
  user: any = null;

  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user') || 'null');
  }

  register(payload: any) {
    return this.http
      .post(`${environment.apiUrl}/auth/register`, payload)
      .pipe(tap((r: any) => this.set(r)));
  }

  login(payload: any) {
    return this.http
      .post(`${environment.apiUrl}/auth/login`, payload)
      .pipe(tap((r: any) => this.set(r)));
  }

  set(r: any) {
    this.token = r.token;
    this.user = r.user;
    localStorage.setItem('token', r.token);
    localStorage.setItem('user', JSON.stringify(r.user));
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAdmin() {
    return this.user && this.user.role === 'admin';
  }
}
