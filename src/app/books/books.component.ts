import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:string='Books';
 books:any={
  title: '',
  author: '',
  genre:'',
  about: '',
  image: ''
}
  constructor(private http:BooksService,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.http.getbooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
      })
  }
  editbook(book:any){
    {
      localStorage.setItem("editbookId", book._id.toString());
      this.router.navigate(['updatebook']);
  
    }
  }
  deletebook(book:any){
    
      this.http.deletebook(book._id)
        .subscribe((data) => {
          this.books = this.books.filter((p:any) => p !== book);
          alert("deleted");
        })
  }

  singlebook(book:any){
    localStorage.setItem("singlebookId", book._id.toString());
    this.router.navigate(['book']);
  }

}
