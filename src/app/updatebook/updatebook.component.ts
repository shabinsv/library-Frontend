import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  title:string="Update Book"
  book={
    title: '',
    author: '',
    genre:'',
    about: '',
    image: ''
  }
  constructor(private http:BooksService,private router:Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editbookId");
    this.http.getbook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }
  updatebook()
  {    
    this.http.editbook(this.book);   
    alert("Success");
    this.router.navigate(['books']);
  }

}
