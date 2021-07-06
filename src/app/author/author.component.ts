import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title:string='Author';
  author:any={
    title: '',
    about: '',
    image: ''
  }

  constructor(public http:AuthorsService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("singleauthorId");
    this.http.getauthor(authorId).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
  }

}
