import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}
  // Auth endpoints handled by AuthService

  createTask(payload:any){ return this.http.post(`${environment.apiUrl}/tasks`, payload); }
  listTasks(){ return this.http.get(`${environment.apiUrl}/tasks`); }
  getTask(id:string){ return this.http.get(`${environment.apiUrl}/tasks/${id}`); }
  updateTask(id:string, payload:any){ return this.http.put(`${environment.apiUrl}/tasks/${id}`, payload); }
  deleteTask(id:string){ return this.http.delete(`${environment.apiUrl}/tasks/${id}`); }

  attachDoc(taskId:string, url:string){ return this.http.post(`${environment.apiUrl}/tasks/${taskId}/documents`, { url }); }
  approveDoc(taskId:string, docId:string, action:'Approved'|'Rejected', note?:string){
    return this.http.post(`${environment.apiUrl}/tasks/${taskId}/documents/${docId}/approve`, { action, note });
  }

  geoSearch(lat:number, lng:number, radius=10){ return this.http.get(`${environment.apiUrl}/tasks/geo/search?lat=${lat}&lng=${lng}&radius=${radius}`); }

  // Admin helper: if backend adds admin listing you can call it here
}
