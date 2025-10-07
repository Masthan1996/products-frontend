import { Component } from '@angular/core';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-go-search',
  standalone: false,
  templateUrl: './go-search.html',
  styleUrl: './go-search.css'
})
export class GoSearch {

  lat: string = '';
  lng: string = '';
  radius = 10;
  results: any[] = [];
  loading = false;
  constructor(private api: ApiService) {}

  search(){
    if (!this.lat || !this.lng) return;
    this.loading = true;
    this.api.geoSearch(parseFloat(this.lat), parseFloat(this.lng), this.radius).subscribe((r:any)=>{ this.results = r; this.loading=false; }, ()=>this.loading=false);
  }
}
