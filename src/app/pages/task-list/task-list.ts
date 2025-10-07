import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {
  tasks: any[] = [];
  loading = false;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(){ this.load(); }
  load(){
    this.loading = true;
    this.api.listTasks().subscribe({
      next: (r:any) => { this.tasks = r; this.loading = false; },
      error: () => this.loading = false
    });
  }
  goCreate(){ this.router.navigate(['/create']); }
  view(t:any){ this.router.navigate(['/task', t._id]); }
}
