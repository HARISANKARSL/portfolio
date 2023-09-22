import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getTeam(){
    return this.http.get<any>('/assets/api/team.json')
  }
  getService(){
    return this.http.get<any>("/assets/api/services.json")
  }
}
