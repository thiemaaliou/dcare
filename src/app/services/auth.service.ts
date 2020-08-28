import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: any){
    return this.http.post(environment.apiUrl+'register', data).pipe(response => response);
  }

  changePassword(data: any){
    return this.http.post(environment.apiUrl+'change-password', data).pipe(response => response);
  }

  activateAccount(key: string){
    return this.http.get(environment.apiUrl+'activate?key='+key).pipe(response => response);
  }

  getReseaux(){
    return this.http.get('/assets/jsons/reseauAgence.json').pipe(response => response);
  }
}
