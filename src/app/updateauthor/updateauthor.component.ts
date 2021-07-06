import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
  title:string="Update Author"
  author={
    title: '',
    about: '',
    image: ''
  }

  constructor(private http:AuthorsService,private router:Router) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editauthorId");
    this.http.getauthor(authorId).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
  }
  updateauthor()
  {    
    this.http.editauthor(this.author);   
    alert("Success");
    this.router.navigate(['authors']);
  }

}
