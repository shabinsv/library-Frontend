import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    username:"",
    password:""
  }
  constructor(private http:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
     this.http.login(this.user)
     .subscribe(res=>{
       localStorage.setItem('token',res.token)
       this.router.navigate([''])
   })
  }

}
