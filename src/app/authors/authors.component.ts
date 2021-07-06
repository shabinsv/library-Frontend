import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:string='Authors';
  authors:any={
    title: '',
    about: '',
    image: ''
  }


  constructor(private http:AuthorsService,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.http.getauthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
      })
  }

  editauthor(author:any){
    {
      localStorage.setItem("editauthorId", author._id.toString());
      this.router.navigate(['updateauthor']);
  
    }
  }
  deleteauthor(author:any){
    
      this.http.deleteauthor(author._id)
        .subscribe((data) => {
          this.authors = this.authors.filter((p:any) => p !== author);
          alert("deleted");
        })
  }

  singleauthor(author:any){
    localStorage.setItem("singleauthorId", author._id.toString());
    this.router.navigate(['author']);
  }


}
