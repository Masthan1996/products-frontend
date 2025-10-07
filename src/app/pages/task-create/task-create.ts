import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  standalone: false,
  templateUrl: './task-create.html',
  styleUrl: './task-create.css'
})
export class TaskCreate {
  form: any;
  saving = false;
  error = '';
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}
  ngOnInit(){ 
  this.form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    due_date: [''],
    latitude: [''],
    longitude: ['']
  });
}
  submit(){
    if (this.form.invalid) return;
    this.saving = true;
    alert('asas')
    this.api.createTask(this.form.value).subscribe({
      next: () => { this.saving=false; this.router.navigate(['/']); },
      error: e => { this.error = e?.error?.message || 'Save failed'; this.saving=false; }
    });
  }
}
