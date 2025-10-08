import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  form: any;
  error = '';
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user']
    });
  }
  submit() {
    if (this.form.invalid) return;
    this.auth.register(this.form.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: e => this.error = e?.error?.message || 'Register failed'
    });
  }
}
