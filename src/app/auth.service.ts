import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(user:any){
    return this.http.post<any>("http://localhost:3000/login",user)
  }
  constructor(private http:HttpClient) { }
  LoggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
   return localStorage.getItem('token')
  }
 
}
