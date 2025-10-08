import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  form: any;
  error = '';
  passwordVisible: boolean = false;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  submit() {
    this.error = '';
    if (this.form.invalid) return;
    this.auth.login(this.form.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => this.error = err?.error?.message || 'Login failed'
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

}
