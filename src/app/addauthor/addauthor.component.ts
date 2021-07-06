import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  title:string='Add Author';
  author={
    title: '',
    about: '',
    image: ''
  }

  constructor(private http:AuthorsService,private router:Router) { }

  ngOnInit(): void {
  }
  AddAuthor(){
    this.http.newAuthor(this.author);
    console.log("called");
    alert("sucess");
     this.router.navigate(["authors"]);
  }

}
