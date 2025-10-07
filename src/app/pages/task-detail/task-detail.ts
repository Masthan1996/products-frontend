import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api';
import { AuthService } from '../../auth';

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css'
})
export class TaskDetail implements OnInit {
  task: any = null;
  docForm: any;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private fb: FormBuilder,
    public auth: AuthService
  ){}
  ngOnInit(){ 
    this.docForm = this.fb.group({ url: ['', Validators.required]});
    this.load(); }
  load(){
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.getTask(id).subscribe((r:any)=>{ this.task=r; this.loading=false; }, ()=>this.loading=false);
    console.log(this.task, 'asasasas');
    
  }
  attach(){
    if (this.docForm.invalid) return;
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.attachDoc(id, this.docForm.value.url).subscribe(()=>{ this.docForm.reset(); this.load(); });
  }
  approve(doc:any, action:'Approved'|'Rejected'){
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.approveDoc(id, doc._id, action, action === 'Rejected' ? 'Rejected by admin' : 'Approved').subscribe(()=>this.load());
  }
}
